(ns writersgame.core
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [dommy.macros :refer [node sel sel1 deftemplate]])
  (:require 
   [dommy.utils :as utils]
   [dommy.core :as dommy]
   [dommy.attrs :as attr]
   [cljs.core.async :refer [timeout chan <! >! put!]]
   [clojure.set :as set]))

(def writers 
  #{{:surname "Cortazar"    :country "Argentina"     :alive false}
    {:surname "Stasiuk"     :country "Poland"        :alive true}
    {:surname "Borges"      :country "Argentina"     :alive false}
    {:surname "Shakespeare" :country "Great Britain" :alive false}
    {:surname "Świetlicki"  :country "Poland"        :alive true}
    {:surname "Milne"       :country "Great Britain" :alive false}
    {:surname "Libera"      :country "Poland"        :alive true}})

(def books1
  #{{:title "Gra w klasy"                     :writer "Cortazar"}
    {:title "Przez rzekę"                     :writer "Stasiuk"}
    {:title "Jadąc do Babadag"                :writer "Stasiuk"}
    {:title "Madame"                          :writer "Libera"}
    {:title "Liryki lozańskie"                :writer "Libera"}
    {:title "Opowieści o kronopiach i famach" :writer "Cortazar"}
    {:title "Dwanaście"                       :writer "Świetlicki"}})

(def books2
  #{{:title "Zimne kraje"                     :writer "Świetlicki"}
    {:title "Księga snów"                     :writer "Borges"}
    {:title "Pamięć Szekspira"                :writer "Borges"}
    {:title "Kubuś Puchatek"                  :writer "Milne"}
    {:title "Chatka Puchatka"                 :writer "Milne"}
    {:title "Sen nocy letniej"                :writer "Shakespeare"}
    {:title "Kupiec wenecki"                  :writer "Shakespeare"}})

(defn receive!
  "Little helper function, to run go block and
   receive messages sended on particular channel"
  [channel msg-function]
    (go (while true
      (let [msg (<! channel)]
        (msg-function msg)))))

(deftemplate book [{:keys [title]}]
  [:li.book [:h2 title]])

(deftemplate writer [{:keys [surname country alive]}]
  [:li {:class (str (when alive "alive ") "writer")}
    [:h2.surname surname]])

(deftemplate writer-with-books [{:keys [surname country alive]} books]
  [:li {:class (str (when alive "alive ") "writer")}
    [:h2.surname surname]
    [:ul
      (for [each books]
        (book each))]])

(def body (sel1 :body))

(def mousech (chan))
(def score (chan))

(dommy/listen! body :mousemove #(put! mousech %))

(def down (atom nil))
(def question (atom false))
(def answer (atom nil))

(receive! mousech
  (fn [e] 
    (when @down (let [x (aget e "clientX") y (aget e "clientY")
                      elh (/ (aget @down "clientHeight") 2) elw (/ (aget @down "clientWidth") 2)]
                  (attr/set-style! @down :left (str (- x elw) "px") :top (str (- y elh) "px"))))))

(def points (sel1 :.done))
(def left (sel1 :.left))

(let [books-cnt (+ (count books1) (count books2))]
  (receive! score
    (fn [e]
      (let [books-left (count (sel :.book))] 
        (dommy/replace-contents! points (- books-cnt books-left))
        (dommy/replace-contents! left books-left)
        (when (zero? books-left)
          (js/alert "won!"))))))

(put! score "")

(doseq [each writers]
  (->> 
    (let [el (writer each)] 
      (dommy/listen! el :mouseup #(when (= @answer (each :surname))
                                      (dommy/remove! @down)
                                      (put! score ""))))
    (dommy/append! (sel1 [:.writers-game :.writers-list]) ,,)))

(defn add-books! [books]
  (doseq [each books]
    (->>
      (let [el (book each)]
        (dommy/listen! body :mouseup (fn []
                              (attr/remove-class! body "moving") 
                              (reset! down nil)
                              (reset! answer nil)
                              (when-not @question 
                                (attr/set-style! el :position "static"))))
        (dommy/listen! el :mousedown (fn []
                              (attr/add-class! body "moving")
                              (attr/set-style! el 
                               :position "absolute" 
                               :left (aget el "offsetLeft") 
                               :top (aget el "offsetTop"))
                              (reset! down el)
                              (reset! answer (each :writer)))))
      (dommy/append! (sel1 :.books-list) ,,))))

(add-books! books1)
(add-books! books2)
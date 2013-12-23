(defproject writersgame "0.1.0-SNAPSHOT"
  :description "Simple drag’n’drop game"
  :url "https://github.com/jonki/writersgame"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2127"]
                 [org.clojure/core.async "0.1.242.0-44b1e3-alpha"]
                 [prismatic/dommy "0.1.1"]]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "writersgame"
              :source-paths ["src"]
              :compiler {
                :output-to "writersgame.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}
             {:id "optimized"
              :source-paths ["src"]
              :compiler {
                :output-to "script.js"
                :optimizations :advanced
                :pretty-print false}}]})

// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import 'core-js/stable'
import 'regenerator-runtime/runtime'
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("jquery")
import 'materialize-css/dist/js/materialize'

$(document).on('turbolinks:load', function() {
  $(".dropdown-trigger").dropdown();
})


console.log('Hello World from Webpacker')

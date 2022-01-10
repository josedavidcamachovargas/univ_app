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
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $('#fade-out-target').fadeOut(4000);
})




console.log('Hello World from Webpacker')

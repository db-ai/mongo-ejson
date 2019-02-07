require 'bundler/gem_tasks'
require 'rspec/core/rake_task'
require 'fileutils'

CANOPY_BIN = ENV.fetch('CANOPY_BIN') { 'canopy' }

RSpec::Core::RakeTask.new(:spec)

task default: :spec

task :compile_js do
  sh %( #{CANOPY_BIN} src/ejson.peg --lang javascript )
end

task :compile_ruby do
  sh %( #{CANOPY_BIN} src/ejson.peg --lang ruby )
end

desc 'Build and run test suite'
task test: [:compile_ruby, :spec] do
end

desc 'Prepare assets'
task assets: [:test, :compile_js] do
  mv 'src/ejson.js', 'vendor/assets/javascripts/ejson.js'
end

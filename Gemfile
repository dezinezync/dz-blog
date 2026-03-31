source "https://rubygems.org"

# --- Ruby 3.2+ Compatibility Patch for Jekyll/Liquid ---
# The 'tainted?' method was removed in Ruby 3.2, but Liquid 4.0.x still calls it.
if RUBY_VERSION >= '3.2'
  module TaintCompatibility
    def tainted?; false; end
    def taint; self; end
    def untaint; self; end
  end
  [Object, String, Symbol, Array, Hash].each { |klass| klass.include(TaintCompatibility) }
end
# --------------------------------------------------------

# Use the GitHub Pages gem to manage Jekyll and its plugins
gem "github-pages", group: :jekyll_plugins

# Required for Ruby 3.0+ as they were removed from the standard library
gem "webrick", "~> 1.8"
gem "csv"
gem "json"
gem "base64"
gem "bigdecimal"
gem "mutex_m"

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# if Rails.env.production?
if ENV["RAILS_ENV"] == "production"
  worker_processes (ENV["UNICORN_WORKERS"] || 2).to_i
else
  worker_processes 1
end
timeout 30
preload_app true
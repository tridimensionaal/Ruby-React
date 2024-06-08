# syntax = docker/dockerfile:1

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version and Gemfile
ARG RUBY_VERSION=3.3.2
FROM registry.docker.com/library/ruby:$RUBY_VERSION-slim as base

ARG UID=1000
ARG GID=1000

# Install necessary build tools
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

ENV GEM_HOME="/app/.bundle"
ENV PATH $GEM_HOME/bin:$GEM_HOME/gems/bin:$PATH

RUN gem install bundler rails rake

ENV RAILS_ROOT /app
WORKDIR /app

# Copy the Gemfile and Gemfile.lock first to leverage Docker cache
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy the rest of the application code
COPY . .

EXPOSE 8081

USER "${UID}:${GID}"

ENTRYPOINT ["/app/bin/docker-entrypoint"]
CMD ["rails", "server"]


# Start from golang v1.11 base image

FROM golang:latest as builder
RUN mkdir -p /go/src/app
WORKDIR /go/src/app
ADD ./app.go /go/src/app
RUN go get -d -v ./...
RUN go install -v ./...

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -o /go/bin/frontend .

# Start a new stage from scratch

FROM alpine:latest  
RUN apk --no-cache add ca-certificates curl
WORKDIR /root/

COPY public ./public
RUN sed -i 's/http\:\/\/localhost\:8080/https\:\/\/backend.sofive.com/g' public/js/navigation.js

COPY --from=builder /go/bin/frontend .

ENTRYPOINT ["./frontend"]
EXPOSE 3000
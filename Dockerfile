# https://spring.io/guides/gs/spring-boot-docker/

FROM openjdk:17-jdk-alpine

ARG JAR_FILE=*.jar
COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
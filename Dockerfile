# https://spring.io/guides/gs/spring-boot-docker/

FROM openjdk:18-jdk-oraclelinux8

WORKDIR /usr/src/app

COPY . .

# Run as non-root
RUN addgroup -g 1001 -S appuser && adduser -u 1001 -S appuser -G appuser
# RUN mkdir /logs && chown -R 1001:1001 /logs
RUN chown -R 1001:1001 /usr/src/app
USER 1001

RUN ./mvnw package

ENTRYPOINT ["java","-jar","/usr/src/app/target/website_ultraservizi-1.0.0-SNAPSHOT.jar"]

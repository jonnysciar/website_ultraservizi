# https://spring.io/guides/gs/spring-boot-docker/

FROM openjdk:18-jdk-oraclelinux8

WORKDIR /usr/src/app

COPY . .

RUN ./mvnw clean package

ENTRYPOINT ["java","-jar","/usr/src/app/target/website_ultra_servizi-1.0.0-SNAPSHOT.jar"]

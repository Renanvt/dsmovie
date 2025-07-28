# dsmovie (c) by Jonatan Renan
# 
# dsmovie is licensed under a
# Creative Commons Attribution 4.0 International License.
# 
# You should have received a copy of the license along with this
# work. If not, see <https://creativecommons.org/licenses/by/4.0/>.


FROM eclipse-temurin:21-jdk

FROM eclipse-temurin:21-jdk

WORKDIR /app

# Define JAVA_HOME explicitamente e adicione ao PATH
ENV JAVA_HOME=/opt/java/openjdk
ENV PATH="$JAVA_HOME/bin:$PATH"

COPY . .

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

CMD ["java", "-jar", "target/dsmovie-0.0.1-SNAPSHOT.jar"]
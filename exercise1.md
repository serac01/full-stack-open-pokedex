# Exercice 11.1 - Warming up

In a hypothetical scenario where a team of six people is actively developing an application in **Java**, the CI (Continuous Integration) setup plays a crucial role in ensuring the quality and reliability of the codebase before its release.

**Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked?**

For linting in the Java ecosystem, tools like **Checkstyle** and **PMD** are commonly used. These tools help maintain coding standards, identify potential bugs, and enforce best practices. For testing, **JUnit** is a widely adopted framework for writing and executing unit tests, while tools like **TestNG** and **Mockito** offer additional features for testing and mocking. Building Java projects is often handled by **Apache Maven** or **Gradle**, which manage dependencies, compile code, and package the application.
    
**What alternatives are there to set up the CI besides Jenkins and GitHub Actions?**

Alternatives to Jenkins and GitHub Actions for CI setup in Java include **Travis CI**, **CircleCI**, and **GitLab CI/CD**. Each of these tools has its strengths and may be preferred based on the team's workflow, integration needs, and familiarity.
    
**Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?**

Choosing between a self-hosted and a cloud-based environment depends on various factors. A self-hosted solution provides more control over infrastructure but requires maintenance and may have limitations in scaling. Cloud-based solutions, like **GitHub Actions** or **Travis CI**, offer convenience, scalability, and often integrate seamlessly with version control platforms. To make an informed decision, is better to consider factors such as the **team's expertise**, **budget constraints**, and **scalability requirements**.

Ultimately, the choice of CI tools and environment should align with the team's preferences, project requirements, and the overall development workflow.
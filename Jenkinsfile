pipeline {
    agent any
    tools{
        gradle 'gradle'
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    // Check if required software is available
                    sh 'npm --version'
                }
            }
        }
        stage('Build') {
            steps {
                // Build the project using Gradle
                sh 'gradle build'
            }
        }
        stage('Deploy to Render') {
            steps {
                sh 'node server'
            }
        }
        stage('Update Landing Page') {
            steps {
                // Make changes to the landing page
                sh 'echo "<h1>MILESTONE 2</h1>" >> index.ejs'
            }
        }
        stage('Push Changes') {
            steps {
                sh 'git add .'
                sh 'git commit -m "Added MILESTONE 2"'
                sh 'git push origin master'
            }
        }
    }
}

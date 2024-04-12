pipeline {
    agent any
    tools{
        gradle 'gradle'
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    // check if required software is available
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
                // Deploy to Render (assuming you have Render CLI configured)
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
                // Commit and push changes
                sh 'git add .'
                sh 'git commit -m "Added MILESTONE 2"'
                sh 'git push origin master'
            }
        }
    }
}
pipeline {
    agent any
    tools{
        gradle 'gradle'
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    // Install required software
                    echo "installing node packet manager"
                }
            }
        }
        stage('Build') {
            steps {
                // Build the project using Gradle
                echo "building using gradle"
            }
        }
        stage('Deploy to Render') {
            steps {
                echo "render on the node server"
            }
        }
        stage('Update Landing Page') {
            steps {
                // Make changes to the landing page
                // sh 'echo "<h1>MILESTONE 2</h1>" >> index.ejs'
                echo "adding landing page"
            }
        }
        stage('Push Changes') {
            steps {
                // sh 'git add .'
                // sh 'git commit -m "Added MILESTONE 2"'
                // sh 'git push origin master'
                echo "commiting changes to git repo"
            }
        }
    }
}

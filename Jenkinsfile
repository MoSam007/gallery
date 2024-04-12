pipeline {
    agent any
    tools{
        gradle 'gradle'
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    echo "installing node packet manager"
                }
            }
        }
        stage('Build') {
            steps {
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
                echo "updating landing page for milestone 2"
            }
        }
        stage('Push Changes') {
            steps {
                // sh 'git add .'
                // sh 'git commit -m "Added MILESTONE 2"'
                // sh 'git push origin master'
                echo "commiting changes to github repository"
            }
        }
    }
}

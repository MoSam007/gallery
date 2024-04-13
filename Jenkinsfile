pipeline {
    agent any
    tools{
        gradle 'gradle'
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    echo "install npm"
                }
            }
        }
        
        stage('Build') {
            steps {
                sh 'gradle init'
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
                echo "updating landing page for milestone 2"
            }
        }
    }  
}
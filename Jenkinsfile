pipeline {
    agent any
    tools{
        nodejs 'node'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh "install npm"
                }
            }
        }
        
        stage('Render') {
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
    }  
}
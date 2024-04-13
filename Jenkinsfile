pipeline {
    agent any
    tools{
        nodejs 'node'
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    sh "install npm"
                }
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
    }  
}
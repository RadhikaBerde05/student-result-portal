pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning Repository'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t result-portal .'
            }
        }

        stage('Deploy Container') {
            steps {
                bat 'docker stop result-container || exit 0'
                bat 'docker rm result-container || exit 0'
                bat 'docker run -d --name result-container -p 8080:80 result-portal'
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'docker ps'
            }
        }
    }
}
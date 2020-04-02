export class TweetServiceClient {
    tweetsApiSearch() {
        return fetch('http://localhost:8080/trends?id=23424747').then(response => response.json())
    }
}
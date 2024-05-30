# アプリケーション名
〜画像3枚と文字数200字まで簡単調理ファーストクッキング〜
# アプリケーション概要
簡単な調理方法のみを集めるサイトにしたい為、画像制限と文字数制限をかけました。
# URL
http://3.114.94.145/
# Basic認証 テストアカウント
Basic認証<br>   ユーザー名  admin<br>    パスワード 2135 <br>
テストアカウント<br>   メールアドレス 1@1<br>    パスワード 1234567a<br>   ユーザー名テスト
# 利用方法
◾️基本的なログイン、ログアウト機能<br>
◾️画像を3枚まで文字数は200文字まで入力できる投稿機能<br>
◾️編集、削除機能<br>
◾️検索機能<br>
◾️いいね機能<br>
◾️新着順、いいね順、投稿した料理を閲覧できる。
# アプリケーションを作成した背景

知り合いに相談したところ、「そんなアプリがあったら良いよね」と言ってくれたのが作ったきっかけです。料理を検索した際に、工程数が複雑なものと簡単なものが交互に表示されることがありました。そこで、最初の投稿に制限をかけ、簡単に説明させる方法がないかと考え、このアプリを作成しました。

# 実装予定の機能

◾️編集機能は改善できる部分があると考えており、今後編集機能の画像をプレビューする部分で画像を変更できるようにする事を予定しています。<br>
◾️見た目に関して簡素な部分があると感じているため、フロント部分を学習して行く予定です。
# データベース設計

# Users

| Column    | Type    | Options     |
| --------- | ------- | ----------- |
| nickname  | string  |  null: false        | 
| username  | string  |         null: false         |
| email           | string  | null: false, unique: true |
| encrypted_password | string  | null: false         |

### Association

- posts: has_many
- Likes: has_many

# Posts

| Column       | Type    | Options     |
| ------------ | ------- | ----------- |
| title        | string  |    null: false          |
| description  | text  |    null: false          |
| user     | references | null: false, foreign_key: true |
### Association

- User: belongs_to

# Likes

| Column    | Type    | Options     |
| --------- | ------- | ----------- |
| user   | references| foreign_key: true |
| post | references | foreign_key: true |

### Association

- User: belongs_to
- post: belongs_to

# 開発環境

◾️フロントエンド html css JavaScript<br>
◾️バックエンド   ruby<br>
◾️インフラ   AWS

# 工夫したポイント
ユーザーが使いやすくなるように画面遷移できる箇所を増やしました。（新着ページ、人気ページ、いいね順等）
# 改善点
JavaScriptでよりアプリを強化できると考えています。<br>
また、全体的にフロントのデザインを改善できると考えており、現在フロントについて学習を実施しています。
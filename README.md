# アプリケーション名
〜画像3枚と文字数200字まで簡単調理ファーストクッキング〜
# アプリケーション概要
簡単な調理方法のみを集めるサイトにしたい為、画像制限と文字数制限をかけました。
# URL
http://3.114.94.145/
# Basic認証 テストアカウント
Basic認証   ユーザー名  admin     パスワード 2135 <br>
テストアカウント   メールアドレス 1@1     パスワード 1234567a   ユーザー名テスト
# 利用方法
◾️基本的なログイン、ログアウト機能<br>
◾️画像を3枚まで文字数は200文字まで入力できる投稿機能<br>
◾️編集、削除機能<br>
◾️検索機能<br>
◾️いいね機能<br>
◾️新着順、いいね順、投稿した料理を閲覧できる。
# アプリケーションを作成した背景

自分の知り合いに相談し提案したらそんなアプリあったら良いよねと言ってくれたのが作ったきっかけで、料理を検索した時に工程数が複雑な物と求めてる工程数が簡単な物が交互に引っかかったりしたのでそれならば、最初の投稿に制限をかけて簡単に説明させる方法は無いかと感じこのアプリを作成しました。

# 実装予定の機能

◾️編集機能がまだ甘いので今後、技術力が身に付いたら編集機能の強化をしたいです。

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
- Recipe: belongs_to



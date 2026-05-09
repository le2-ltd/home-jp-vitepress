export const skillGroups = [
  {
    code: "Frontend",
    title: "フロントエンド開発グループ",
    body: "UI/UXとマルチプラットフォーム開発を担い、高品質な体験を素早く形にします。",
    tags: ["Vue.js", "JavaScript", "WebSocket", "iOS", "Android", "Flutter"],
    tone: "terraform",
  },
  {
    code: "Backend",
    title: "バックエンド開発グループ",
    body: "拡張性と信頼性を重視したサーバーアーキテクチャを設計・実装します。",
    tags: ["PHP", "Java (Server)", "Node.js", "Golang", "Python", "C#"],
    tone: "waypoint",
  },
  {
    code: "Data",
    title: "データデザイングループ",
    body: "要件に応じて最適なデータモデルを構築し、性能と可用性を両立させます。",
    tags: ["RDB", "NoSQL"],
    tone: "nomad",
  },
  {
    code: "Infrastructure",
    title: "基盤インフラ管理グループ",
    body: "クラウドとIaCによる安定した運用基盤を整備し、継続的な改善を推進します。",
    tags: ["AWS", "Terraform", "Docker"],
    tone: "vagrant",
  },
  {
    code: "QA",
    title: "テストグループ",
    body: "手動・自動双方のテスト戦略で品質を可視化し、リリースリスクを最小化します。",
    tags: ["非自動化テスト", "Selenium", "JMeter"],
    tone: "vault",
  },
  {
    code: "PMO",
    title: "プロジェクト管理オフィス",
    body: "計画立案、進捗・リスク管理、コミュニケーション設計を統括し、プロジェクトを成功に導きます。",
    tags: ["プロジェクト管理"],
    tone: "boundary",
  },
];

export const engineeringPhases = [
  {
    title: "要求確認",
    items: ["QA作成基準", "単体試験QA基準", "結合試験QA基準", "進捗管理基準"],
  },
  {
    title: "設計",
    items: ["スケジュール基準", "API設計書の基準", "単体試験ケース作成基準", "結合試験用詳細設計書作成基準"],
  },
  {
    title: "実施",
    items: ["コードコーディングの基準", "gitの使用基準", "単体試験実施基準", "バグロギング基準"],
  },
  {
    title: "レビュー",
    items: ["進捗表レビュー基準", "コードレビューチェックリスト", "品質基準", "結合試験実施チェックリスト"],
  },
];

export const engineeringCapabilities = [
  {
    title: "プロジェクト開発モデル",
    body: "要件が安定している案件はウォーターフォールで段階的に管理し、変動が大きい案件は短いスプリントと高頻度のフィードバックで推進します。",
  },
  {
    title: "定量化と反省能力",
    body: "開発テスト統計表、課題ログ、週次品質レビュー、RCAを通じて、課題の早期発見と恒常的な改善を両立します。",
  },
  {
    title: "納品能力",
    body: "時間と品質のダブルチェックを徹底し、納品後のフィードバックを次の見積もりや改善計画へ即座に反映します。",
  },
  {
    title: "内部管理能力",
    body: "入室許可、来訪者ログ、機器持ち出し、廃棄物管理などの規程を運用し、情報・資産・人員の安全を守ります。",
  },
  {
    title: "安全基準",
    body: "IPA「安全なウェブサイトの作り方」に準拠し、設計・実装・運用の各工程で情報セキュリティ要件を順守します。",
  },
  {
    title: "再委託能力",
    body: "パートナー選定、契約範囲、品質基準、定例会議、受け入れテスト、品質監査を通じて外部リソースの成果を管理します。",
  },
];

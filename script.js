const quizData = [
  { 
    image: "img/洗濯機30℃.png", 
    answer: "洗濯機30℃まで洗濯対応可",
    choices: ["洗濯機30℃まで洗濯対応可", "30分まで熱湯の漬け置き可", "手洗い30℃まで洗濯対応可", "30℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は30℃まで、洗濯の強さは標準的な設定で行なえることを示しています。通常の衣類に適した洗濯方法です。"
  },
  { 
    image: "img/洗濯機30℃（弱）.png", 
    answer: "洗濯機30℃まで弱い洗濯対応可",
    choices: ["洗濯機30℃まで弱い洗濯対応可", "洗濯機30℃まで強い洗濯対応可", "手洗い30℃まで洗濯対応可", "30℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は30℃まで、洗濯の強さは弱い設定で行なえることを示しています。デリケートな衣類に適した洗濯方法です。"
  },
  { 
    image: "img/洗濯機30℃（弱弱）.png", 
    answer: "洗濯機30℃までごく弱い洗濯対応可",
    choices: ["洗濯機30℃までごく弱い洗濯対応可", "洗濯機30℃まで非常に強い洗濯対応可", "手洗い30℃まで洗濯対応可", "30℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は30℃まで、洗濯の強さはごく弱い設定で行なえることを示しています。非常にデリケートな衣類に適した洗濯方法です。"
  },  
  { 
    image: "img/洗濯機40℃.png", 
    answer: "洗濯機40℃まで洗濯対応可",
    choices: ["洗濯機40℃まで洗濯対応可", "40分まで熱湯の漬け置き可", "手洗い40℃まで洗濯対応可", "40℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は40℃まで、洗濯の強さは標準的な設定で行なえることを示しています。通常の衣類に適した洗濯方法です。"
  },
  { 
    image: "img/洗濯機40℃（弱）.png", 
    answer: "洗濯機40℃まで弱い洗濯対応可",
    choices: ["洗濯機40℃まで弱い洗濯対応可", "洗濯機40℃まで強い洗濯対応可", "手洗い40℃まで洗濯対応可", "40℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は40℃まで、洗濯の強さは弱い設定で行なえることを示しています。デリケートな衣類に適した洗濯方法です。"
  },
  { 
    image: "img/洗濯機40℃（弱弱）.png", 
    answer: "洗濯機40℃までごく弱い洗濯対応可",
    choices: ["洗濯機40℃までごく弱い洗濯対応可", "洗濯機40℃まで非常に強い洗濯対応可", "手洗い40℃まで洗濯対応可", "40℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は40℃まで、洗濯の強さはごく弱い設定で行なえることを示しています。非常にデリケートな衣類に適した洗濯方法です。"
  },
  { 
    image: "img/洗濯機50℃.png", 
    answer: "洗濯機50℃まで洗濯対応可",
    choices: ["洗濯機50℃まで洗濯対応可", "50分まで熱湯の漬け置き可", "手洗い50℃まで洗濯対応可", "50℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は50℃まで、洗濯の強さは標準的な設定で行なえることを示しています。通常の衣類に適した洗濯方法です。"
  },  
  { 
    image: "img/洗濯機50℃（弱）.png", 
    answer: "洗濯機50℃まで弱い洗濯対応可",
    choices: ["洗濯機50℃まで弱い洗濯対応可", "洗濯機50℃まで強い洗濯対応可", "手洗い50℃まで洗濯対応可", "50℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は50℃まで、洗濯の強さは弱い設定で行なえることを示しています。デリケートな衣類に適した洗濯方法です。"
  },
  { 
    image: "img/洗濯機60℃.png", 
    answer: "洗濯機60℃まで洗濯対応可",
    choices: ["洗濯機60℃まで洗濯対応可", "60分まで熱湯の漬け置き可", "手洗い60℃まで洗濯対応可", "60℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は60℃まで、洗濯の強さは標準的な設定で行なえることを示しています。通常の衣類に適した洗濯方法です。"
  },  
  { 
    image: "img/洗濯機60℃（弱）.png", 
    answer: "洗濯機60℃まで弱い洗濯対応可",
    choices: ["洗濯機60℃まで弱い洗濯対応可", "洗濯機60℃まで強い洗濯対応可", "手洗い60℃まで洗濯対応可", "60℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は60℃まで、洗濯の強さは弱い設定で行なえることを示しています。デリケートな衣類や色落ちしやすい衣類に適した洗濯方法です。"
  },
  { 
    image: "img/洗濯機70℃.png", 
    answer: "洗濯機70℃まで洗濯対応可",
    choices: ["洗濯機70℃まで洗濯対応可", "70分まで熱湯の漬け置き可", "手洗い70℃まで洗濯対応可", "70℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は70℃まで、洗濯の強さは標準的な設定で行なえることを示しています。通常の衣類に適した洗濯方法です。"
  },
  { 
    image: "img/洗濯機95℃.png", 
    answer: "洗濯機95℃まで洗濯対応可",
    choices: ["洗濯機95℃まで洗濯対応可", "95分まで熱湯の漬け置き可", "手洗い95℃まで洗濯対応可", "95℃まで漬け置き可"],
    explanation: "この表示は洗濯機での洗濯が可能で、水温は95℃まで、洗濯の強さは標準的な設定で行なえることを示しています。通常の衣類に適した洗濯方法です。"
  },
  { 
    image: "img/家庭での洗濯禁止.png", 
    answer: "家庭での洗濯禁止",
    choices: ["家庭での洗濯禁止", "ドライクリーニング禁止", "ウエットクリーニング禁止", "タンブル乾燥禁止"],
    explanation: "この表示は、家庭での洗濯が禁止されていることを示しています。洗濯機や手洗いなど、いかなる方法でも洗濯を行ってはいけません。"
  },
  { 
    image: "img/手洗い40℃.png", 
    answer: "手洗い40℃まで対応可",
    choices: ["手洗い40℃まで対応可", "40分まで熱湯の漬け置き可", "洗濯機40℃まで対応可", "40℃まで漬け置き可"],
    explanation: "この表示は、手洗いが40℃まで対応可能であることを示しています。手洗いは、衣類を優しく扱うことができる洗濯方法です。"
  },     
  { 
    image: "img/手洗い30℃.png", 
    answer: "手洗い30℃まで対応可",
    choices: ["手洗い30℃まで対応可", "30分まで熱湯の漬け置き可", "洗濯機30℃まで対応可", "30℃まで漬け置き可"],
    explanation: "この表示は、手洗いが30℃まで対応可能であることを示しています。手洗いは、衣類を優しく扱うことができる洗濯方法です。"
  },
  { 
    image: "img/漂白剤OK.png", 
    answer: "漂白剤使用可",
    choices: ["漂白剤使用可", "漂白剤使用禁止", "酸素系の漂白剤使用可", "塩素系漂白剤使用可"],
    explanation: "この表示は、塩素系・酸素系を問わず漂白剤の使用が可能であることを示しています。"
  },
  { 
    image: "img/酸素系の漂白剤OK.png", 
    answer: "酸素系の漂白剤使用可",
    choices: ["酸素系の漂白剤使用可", "漂白剤使用可", "漂白剤使用禁止", "塩素系漂白剤使用可"],
    explanation: "この表示は、酸素系の漂白剤の使用が可能（塩素系の漂白剤は使用不可）であることを示しています。酸素系漂白剤は、塩素系の漂白剤と比べると漂白力は落ちますが、繊維を傷めることなく汚れを効果的に落とすことができます。"
  },
  { 
    image: "img/漂白剤使用禁止.png", 
    answer: "漂白剤使用禁止",
    choices: ["漂白剤使用禁止", "漂白剤使用可", "酸素系の漂白剤使用可", "塩素系漂白剤使用可"],
    explanation: "この表示は、漂白剤の使用が禁止されていることを示しています。漂白剤を使用すると、色落ちや生地の傷みの原因となりますので注意が必要です。"
  }, 
  { 
    image: "img/タンブル乾燥80℃.png", 
    answer: "タンブル乾燥80℃まで対応可",
    choices: ["タンブル乾燥80℃まで対応可", "ドライクリーニング対応可", "強めのドライクリーニング対応可", "ドラム式洗濯機対応可"],
    explanation: "この表示は、タンブル乾燥（洗濯物を回転させながら温風を当てて乾燥させる方法）が80℃まで対応可能であることを示しています。高温でのタンブル乾燥にも対応しています。"
  },  
  { 
    image: "img/タンブル乾燥60℃.png", 
    answer: "タンブル乾燥60℃まで対応可",
    choices: ["タンブル乾燥60℃まで対応可", "ドライクリーニング対応可", "弱いドライクリーニング対応可", "ドラム式洗濯機対応可"],
    explanation: "この表示は、タンブル乾燥（洗濯物を回転させながら温風を当てて乾燥させる方法）が60℃まで対応可能であることを示しています。"
  },
  { 
    image: "img/タンブル乾燥禁止.png", 
    answer: "タンブル乾燥禁止",
    choices: ["タンブル乾燥禁止", "タンブル乾燥60℃以上禁止", "アイロン仕上げ禁止", "ドライクリーニング禁止"],
    explanation: "この表示は、タンブル乾燥（洗濯物を回転させながら温風を当てて乾燥させる方法）が禁止されていることを示しています"
  },
  
  { 
    image: "img/つり干し.png", 
    answer: "つり干し",
    choices: ["つり干し", "アイロン仕上げ対応可", "タンブル乾燥対応可", "漂白処理対応可"],
    explanation: "この表示は、洗濯後の衣類をつり干しすることを推奨しています。つり干しとは、洗濯物をハンガーなどにかけて干すことで乾燥させる方法です。"
  },  
  { 
    image: "img/日陰でつり干し.png", 
    answer: "日陰でつり干し",
    choices: ["日陰でつり干し", "つり干し", "日陰で平干し", "日陰でぬれつり干し"],
    explanation: "この表示は、洗濯後の衣類を日陰でつり干しすることを推奨しています。つり干しとは、洗濯物をハンガーなどにかけて干すことで乾燥させる方法です。"
  },
  { 
    image: "img/ぬれつり干し.png", 
    answer: "ぬれつり干し",
    choices: ["ぬれつり干し", "つり干し", "日陰でぬれつり干し", "ぬれ平干し"],
    explanation: "この表示は、洗濯後の衣類をぬれたままつり干しすることを推奨しています。つり干しとは、洗濯物をハンガーなどにかけて干すことで乾燥させる方法です。"
  },
  { 
    image: "img/日陰でぬれつり干し.png", 
    answer: "日陰でぬれつり干し",
    choices: ["日陰でぬれつり干し", "日陰でつり干し", "ぬれつり干し", "日陰でぬれ平干し"],
    explanation: "この表示は、洗濯後の衣類をぬれたまま日陰でつり干しすることを推奨しています。つり干しとは、洗濯物をハンガーなどにかけて干すことで乾燥させる方法です。"
  },
  { 
    image: "img/平干し.png", 
    answer: "平干し",
    choices: ["平干し", "つり干し", "日陰で平干し", "ぬれ平干し"],
    explanation: "この表示は、洗濯後の衣類を平らな場所で干すことを推奨しています。平干しとは、洗濯物を平らな場所に広げて乾燥させる方法です。"
  }, 
  { 
    image: "img/日陰で平干し.png", 
    answer: "日陰で平干し",
    choices: ["日陰で平干し", "平干し", "日陰でぬれ平干し", "日陰でつり干し"],
    explanation: "この表示は、洗濯後の衣類を日陰で平干しすることを推奨しています。平干しとは、洗濯物を平らな場所に広げて乾燥させる方法です。"
  },  
  { 
    image: "img/ぬれ平干し.png", 
    answer: "ぬれ平干し",
    choices: ["ぬれ平干し", "平干し", "日陰でぬれ平干し", "ぬれつり干し"],
    explanation: "この表示は、洗濯後の衣類をぬれたまま平干しすることを推奨しています。平干しとは、洗濯物を平らな場所に広げて乾燥させる方法です。"
  },    
  {
    image: "img/日陰でぬれ平干し.png", 
    answer: "日陰でぬれ平干し",
    choices: ["日陰でぬれ平干し", "日陰で平干し", "ぬれ平干し", "日陰でぬれつり干し"],
    explanation: "この表示は、洗濯後の衣類をぬれたまま日陰で平干しすることを推奨しています。平干しとは、洗濯物を平らな場所に広げて乾燥させる方法です。"
  },
  { 
    image: "img/アイロン仕上げ120℃.png", 
    answer: "アイロン仕上げ120℃まで対応可",
    choices: ["アイロン仕上げ120℃まで対応可", "アイロン仕上げ160℃まで対応可", "アイロン仕上げ210℃まで対応可", "蒸気アイロン対応可"],
    explanation: "この表示は、アイロン仕上げが底面温度120℃まで対応可能であることを示しています。高温に弱い生地に適したアイロン設定です。"
  },
  { 
    image: "img/アイロン仕上げ160℃.png", 
    answer: "アイロン仕上げ160℃まで対応可",
    choices: ["アイロン仕上げ120℃まで対応可", "アイロン仕上げ160℃まで対応可", "アイロン仕上げ210℃まで対応可", "蒸気アイロン対応可"],
    explanation: "この表示は、アイロン仕上げが底面温度160℃まで対応可能であることを示しています。一般的な衣類に適したアイロン設定です。"
  },
  { 
    image: "img/アイロン仕上げ210℃.png", 
    answer: "アイロン仕上げ210℃まで対応可",
    choices: ["アイロン仕上げ120℃まで対応可", "アイロン仕上げ160℃まで対応可", "アイロン仕上げ210℃まで対応可", "蒸気アイロン対応可"],
    explanation: "この表示は、アイロン仕上げが底面温度210℃まで対応可能であることを示しています。高温に強い生地に適したアイロン設定です。"
  },
  { 
    image: "img/アイロン120℃スチーム禁止.png", 
    answer: "アイロン120℃スチーム禁止",
    choices: ["アイロン120℃スチーム禁止", "アイロン210℃スチーム禁止", "アイロン仕上げ禁止", "アイロン160℃スチーム禁止"],
    explanation: "この表示は、底面温度（120℃）を制限としてスチームなしでのアイロンの使用のみが許可されていることを示しています。"
  },  
  { 
    image: "img/アイロン仕上げ禁止.png", 
    answer: "アイロン仕上げ禁止",
    choices: ["アイロン仕上げ禁止", "アイロン120℃スチーム禁止", "アイロン仕上げ120℃以上禁止", "タンブル乾燥禁止"],
    explanation: "この表示は、アイロン仕上げが禁止されていることを示しています。"
  },
  { 
    image: "img/ドライクリーニングOK.png", 
    answer: "ドライクリーニング対応可",
    choices: ["ドライクリーニング対応可", "弱いドライクリーニング対応可", "ウエットクリーニング対応可", "ドライクリーニング石油系溶剤のみ対応可"],
    explanation: "この表示は、ドライクリーニングが可能であることを示しています。ドライクリーニングとは、水を使わずに、有機溶剤（塩素系溶剤や石油系溶剤など）を使って衣類を洗う洗濯方法です。"
  },
  { 
    image: "img/ドライクリーニングOK（弱）.png", 
    answer: "弱いドライクリーニング対応可",
    choices: ["弱いドライクリーニング対応可", "ドライクリーニング対応可", "弱いドライクリーニング石油系溶剤のみ対応可", "弱いウエットクリーニング対応可"],
    explanation: "この表示は、弱いドライクリーニングが可能であることを示しています。ドライクリーニングとは、水を使わずに、有機溶剤（塩素系溶剤や石油系溶剤など）を使って衣類を洗う洗濯方法です。"
  },
  { 
    image: "img/ドライクリーニング石油系のみOK.png", 
    answer: "ドライクリーニング石油系溶剤のみ対応可",
    choices: ["ドライクリーニング石油系溶剤のみ対応可", "弱いドライクリーニング石油系溶剤のみ対応可", "ドライクリーニング対応可", "ウエットクリーニング対応可"],
    explanation: "この表示は、ドライクリーニング石油系溶剤のみが対応可能であることを示しています。ドライクリーニングとは、水を使わずに、有機溶剤（塩素系溶剤や石油系溶剤など）を使って衣類を洗う洗濯方法です。"
  },  
  { 
    image: "img/ドライクリーニング石油系のみOK（弱）.png", 
    answer: "弱いドライクリーニング石油系溶剤のみ対応可",
    choices: ["弱いドライクリーニング石油系溶剤のみ対応可", "ドライクリーニング石油系溶剤のみ対応可", "弱いドライクリーニング対応可", "弱いウエットクリーニング対応可"],
    explanation: "この表示は、弱いドライクリーニング石油系溶剤のみが対応可能であることを示しています。ドライクリーニングとは、水を使わずに、有機溶剤（塩素系溶剤や石油系溶剤など）を使って衣類を洗う洗濯方法です。"
  },
  { 
    image: "img/ドライクリーニング禁止.png", 
    answer: "ドライクリーニング禁止",
    choices: ["ドライクリーニング禁止", "ウエットクリーニング禁止", "家庭での洗濯禁止", "タンブル乾燥禁止"],
    explanation: "この表示は、ドライクリーニングが禁止されていることを示しています。"
  },
  { 
    image: "img/ウエットクリーニングOK.png", 
    answer: "ウエットクリーニング対応可",
    choices: ["ウエットクリーニング対応可", "弱いウエットクリーニング対応可", "ドライクリーニング対応可", "ウエットクリーニング禁止"],
    explanation: "この表示は、ウエットクリーニングが可能であることを示しています。ウエットクリーニングとは、水洗いできない衣類を、水と専用洗剤を使って洗う洗濯方法です。"
  },  
  { 
    image: "img/ウエットクリーニングOK（弱）.png", 
    answer: "弱いウエットクリーニング対応可",
    choices: ["弱いウエットクリーニング対応可", "ウエットクリーニング対応可", "ごく弱いウエットクリーニング対応可", "ウエットクリーニング禁止"],
    explanation: "この表示は、弱いウエットクリーニングが可能であることを示しています。ウエットクリーニングとは、水洗いできない衣類を、水と専用洗剤を使って洗う洗濯方法です。"
  },
  { 
    image: "img/ウエットクリーニングOK（弱弱）.png", 
    answer: "ごく弱いウエットクリーニング対応可",
    choices: ["ごく弱いウエットクリーニング対応可", "弱いウエットクリーニング対応可", "ウエットクリーニング対応可", "ウエットクリーニング禁止"],
    explanation: "この表示は、ごく弱いウエットクリーニングが可能であることを示しています。ウエットクリーニングとは、水洗いできない衣類を、水と専用洗剤を使って洗う洗濯方法です。"
  },
  { 
    image: "img/ウエットクリーニング禁止.png", 
    answer: "ウエットクリーニング禁止",
    choices: ["ウエットクリーニング禁止", "ウエットクリーニング対応可", "ドライクリーニング禁止", "家庭での洗濯禁止"],
    explanation: "この表示は、ウエットクリーニングが禁止されていることを示しています。"
  },
];

// 説明スライドデータ（変更なし）
const explanationSlides = [
"ようこそ、洗濯表示クイズへ！このクイズは普段見慣れているはずだけど、意外と知らない洗濯表示の知識を試すものです。",
"洗濯表示ってなんだ？というみなさん。衣服のタグに書いてある、あの謎の記号たちです。",
"「洗濯機で洗える」「アイロンは低温で」「漂白剤は使わない」など、衣類の取り扱い方法を示す大切な情報です。",
"（法律上は、正確には家庭用品品質表示法により定められた繊維製品品質表示規程第2条第3号の「取扱い表示」のことをいいます）",
"ともあれ。実際にその表示を見て、正しく理解できている人はどれくらいでしょうか？",
"知ってるようで、実は知らない。そんな洗濯表示の世界を、今回はクイズ形式で学んでいきましょう！",
"あなたが買ったラブライブのTシャツ、ちゃんと表示どおりに洗ってますか？",
"とりあえず洗濯機に放り込んでいませんか？",
"それ、実は大変なことになっているかもしれませんよ。",
"でも、大丈夫！",
"このクイズをやるだけで、洗濯表示の基本が全て学べます。",
"そして、今回は「洗濯」がテーマということで。",
"問題の形式は……",
"「選択」問題です！笑",
"（万雷の拍手）",
"「洗濯」と「選択」をかけるギャグは、江戸時代からあります。",
"ソースは俺。",
"ということで、これは選択式クイズです。",
"洗濯表示の画像が出てきますので、それに対する正しい選択肢を選んでください。",
"選択肢は4つあります。いわゆる四択問題です。",
"四択問題といえば、クイズ番組の定番ですね。",
"「クイズ！ヘキサゴン」や「クイズ！ミリオネア」、「パネルクイズ アタック25」など、数々の名番組が四択問題を取り入れています。",
"いま「たとえ古くね？」って思ったそこのあなた。",
"……妙ですね。",
"どうして、いま私が挙げたクイズ番組が「古い」ということがわかったのでしょうか？",
"それは、ズバリあなたが私と同世代だからです！（名探偵）",
"つまり、あなたも私も、洗濯表示に関する知識のリニューアルが必要な世代ということです！",
"どういうことかって？",
"それは、令和6年8月20日から、洗濯表示の新しい基準が導入されたからです。",
"（これはマジです）",
"参考リンクは<a href='https://shinycolors.enza.fun/' target='_blank' rel='noopener noreferrer'>こちら</a>です。",
"失礼しました。先程のリンクは今年で7周年を迎えたenza対応版ゲーム「アイドルマスターシャイニーカラーズ」（通称：シャニマス）のサイトでした。",
"正しいリンクは<a href='https://www.caa.go.jp/policies/policy/representation/household_goods/laundry_symbols.html' target='_blank' rel='noopener noreferrer'>こちら</a>です。",
"つまり、昔あなたたちが休日の昼間に連続テレビ小説『ちりとてちん』の再放送を見ながらお母さんの畳んだＴシャツを手慰みにいじっていたときに見ていたはずのあの記号たちは、もう古いものになってしまったのです。",
"でも、安心してください。",
"このクイズでは、令和6年8月20日からの新しい洗濯表示に基づいて出題します。",
"アプデ済みなんです！",
"興奮してきましたか？",
"興奮してきましたね？",
"わかりました。",
"では、まずは深呼吸しましょう。",
"吸って〜〜〜",
"吐いて〜〜〜",
"洗濯機も、呼吸しています。",
"特にドラム式は、うるさい。",
"静音設計？ うそつけ。深夜めちゃくちゃうるさいじゃん。",
"ほんと、夜中の洗濯機の音ってなんか不安になる。",
"「ｶﾞﾀｶﾞﾀｶﾞﾀｶﾞﾀ！」って音で世界終わるのかと思う。",
"うちのアパートの二階の人、聞いてる？",
"さて、すみません。脱線しましたね。",
"脱線といえば、脱水。",
"「脱水」って苗字、あったら結構アリ",
"「温水」みたいな",
"ぬっくんじゃなくて、だっくんって呼ばれそう。",
"ヒロアカにいそうよね、脱水くん。",
"脱水流（だっすいりゅう） 個性名：「脱水（ドライアウト）」",
"あらゆる物体や生命体から水分を奪うことができる個性。",
"自身も水分不足になりやすく、常に水筒を携帯している。",
"「脱水くん、また水分補給忘れてるよ！」「あ、やばい！ 俺の水分が……！」",
"クロコダイルと砂藤力道のハーフ？",
"終盤戦でサポート科の「加湿」ちゃんとのコンビが光るんだよね。",
"「脱水くんと加湿ちゃん」",
"そういうスピンオフはまだ企画段階です。",
"なぜなら本編がまだ始まっていないから。",
"さ、そろそろいきましょうかね。",
"「こんなことしてる間に洗濯物が乾いちまった！」なんてね、落語のサゲになっちゃいますからね。",
"ね、流石にうんざりしてきたでしょ？",
"連打して読み飛ばしたいのに「次へ」ボタンの位置がズレるの鬱陶しいなって思ってるでしょ？",
"本当にね、いやー、なかなか上手くつくれなくてね、申し訳ないっす。",
"でもまあ、そろそろ折り返しなんでもうちょっとだけお付き合いください。",
"では、ここでクイズの前に一つだけ注意点があります。",
"このクイズは、あくまで「洗濯表示」に関するものです。",
"洗濯機の使い方や、洗剤の選び方、干し方などに関するクイズは含まれません。",
"あくまで「洗濯表示」に限定したクイズです。",
"でも、洗濯バサミは絶対プラスチック製のを買ってはいけない。",
"数年後にはミイラになってるから。",
"触れるだけで粉々になるから。",
"「こ、これって脱水くんのせい？」「俺のせいじゃねーよ……」",
"ｳﾋｮﾋｮ!（この世でマグマだんのホムラにしかすることを許されていない笑い声）",
"すいません。スピンオフしてしまいました。",
"「脱線」が過ぎました。",
"なんつて笑",
"いや、元々「脱線」から「脱水」が似てるよねって話で始まったのにまた脱水から脱線に戻してちょっと上手いこと言ったみたいにすな！",
"脱線の環状線が脱線しとるんかい！",
"脱線のウロボロスかい！",
"ギャグの二度漬けかい！",
"（深呼吸）",
"二度漬けといえば、「漬け置き」って知ってますか？",
"洗濯物を長時間水に浸して、汚れを浮かせる方法です。",
"しかし「漬け置き」って言葉、あまりにもお漬物すぎる。",
"京都の料亭とかで「秋茄子のつけ置き（つけ、の部分だけひらがな）」とか出てきたら、ああそういうのがあるんだ～ってなりませんか？",
"あっ、流石にどうでもいいですか？",
"早く始めろって？",
"そうですね、流石にね。",
"長い文章を読み続けて、きっと洗濯物に関する一切のやる気が削がれてしまったことでしょう。",
"私もこのクイズを作っていたせいで昨日は洗濯物を回すのを忘れていました。",
"今頃になって焦っています。",
"ところで、洗濯物を干すとき、物干し竿が前の洗濯物で埋まってると「あーあ」って思いますよね。",
"「あーあ」って思いながらカーテンレールに干すんですよね。",
"カーテンレールはいつもあなたの洗濯物を支えています。（AC）",
"ちなみに、私はスーツとかをカーテンレールにハンガーで提げています。",
"なぜなら、クローゼットがないから。",
"さて、そろそろこの前説の「カーテンコール」も終わりにしましょう。",
"優里の「カーテンコール」、いいよね。",
"ヒロアカ7期のOPのやつね。（伏線回収）",
"ふう……",
"ここまで読んでくださった忍耐強いあなたにむけて、最後に宣伝です。",
"下にずっとしつこくで続けているリンク、気になりますよね？",
"はい。ありがとうございます。",
"「ラジオ七輪」は、毎週土曜日の21:00からニコニコ生放送で配信をしているオタクアマチュアラジオ番組です。",
"このクイズ企画も、実は先日ラジオ企画の一つとして行なったものでした。",
"よろしければ、ぜひYoutubeのアーカイブからでも聴いてみてください。",
"さて。",
"宣伝が入るとエンタメって急に醒めますよね。",
"まあ、ここまで頑張ってきたわけですからクイズだけでもやってってください。",
"このクイズは、あなたの洗濯表示に対する理解を深めるためのものです。",
"気持ちが醒めても、洗濯物が乾いていなくても、あなたの知識は永遠に乾くことはありません。",
"今こそ挑戦のときです。知識と直感を信じて。",
"必要なのは、あなたの頭脳の柔軟性。",
"だからといって柔軟剤を飲んではいけませんよ？",
"死ぬから。",
"じゃあ、そろそろ始めますか！",
"よし……",
"やるぞ…………",
"いやー、緊張してきたな。",
"心の準備はいいですか？",
"飲み物は用意しましたか？",
"携帯の充電は大丈夫ですか？",
"洗濯物は干しましたか？",
"トイレには行きましたか？",
"漏らす？",
"漏らさない？",
"減税？",
"給付金？",
"漏らしても大丈夫！",
"漏らしたら、洗濯すればいいんです！",
"洗濯表示通りに！",
"減税しても大丈夫！",
"金持ちからまた取ればいいんです！",
"消極的社会主義、バンザイ！",
"さあ、始めましょう！",
"洗濯表示クイズ、スタート！"
];

// グローバル変数
let current = 0;
let score = 0;
let currentQuizData = [];
let currentSlide = 0;

// グローバル変数に追加
let selectedMode = "";

// 要素取得関数
function getElement(id) {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Element with id "${id}" not found`);
  }
  return element;
}

// 画面制御関数
function hideAllScreens() {
  const screens = [
    "title-screen",
    "explanation-screen",
    "mode-screen",
    "explanation-confirm-screen",
    "quiz-area",
    "result-screen",
    "answer-list-screen"
  ];
  
  screens.forEach(screenId => {
    const screen = getElement(screenId);
    if (screen) {
      screen.style.display = "none";
    }
  });
}

function showScreen(screenId) {
  console.log(`Showing screen: ${screenId}`);
  hideAllScreens();
  const screen = getElement(screenId);
  if (screen) {
    screen.style.display = "block";
  }
}

// 基本的な遷移関数
function showModeScreen() {
  console.log("showModeScreen called");
  showScreen("mode-screen");
}

function showExplanationConfirm(mode) {
  console.log(`showExplanationConfirm called with mode: ${mode}`);
  selectedMode = mode;
  showScreen("explanation-confirm-screen");
  
  const modeInfo = getElement("selected-mode-info");
  if (modeInfo) {
    if (mode === "full") {
      modeInfo.textContent = "全問チャレンジモードを選択しました。あなたの人生の貴重な時間を無駄にする説明を読んでから始めますか？";
    } else if (mode === "random") {
      modeInfo.textContent = "ランダム10問モードを選択しました。あなたの人生の貴重な時間を無駄にする説明を読んでから始めますか？";
    }
  }
}

function showExplanation() {
  console.log("showExplanation called");  
  showScreen("explanation-screen");
  currentSlide = 0;
  showSlide();
}

function startQuizDirectly() {
  console.log("startQuizDirectly called");
  if (selectedMode === "full") {
    startFullQuiz();
  } else if (selectedMode === "random") {
    startRandomQuiz();
  }
}

// 説明画面の最後で適切なクイズを開始
function startQuizFromExplanation() {
  console.log("startQuizFromExplanation called");
  if (selectedMode === "full") {
    startFullQuiz();
  } else if (selectedMode === "random") {
    startRandomQuiz();
  }
}

// 次のスライド
function nextSlide() {
  console.log("nextSlide called");
  if (currentSlide < explanationSlides.length - 1) {
    currentSlide++;
    showSlide();
  } else {
    // 説明の最後に達したら選択されたモードでクイズを開始
    startQuizFromExplanation();
  }
}

function prevSlide() {
  console.log("prevSlide called");
  if (currentSlide > 0) {
    currentSlide--;
    showSlide();
  }
}

function restartExplanation() {
  console.log("restartExplanation called");
  currentSlide = 0;
  showSlide();
}

// クイズ関数
function showQuestion() {
  console.log(`showQuestion called: ${current + 1}/${currentQuizData.length}`);
  
  if (current >= currentQuizData.length) {
    showResultScreen();
    return;
  }
  
  const q = currentQuizData[current];
  const imageEl = getElement("quiz-image");
  const choicesEl = getElement("choices");
  const resultEl = getElement("result");
  const nextBtn = getElement("next-btn");
  const explanationBox = getElement("explanation-box");
  const questionNumber = getElement("question-number");
  
  // 問題番号を「第◯問」形式で表示
  if (questionNumber) {
    questionNumber.textContent = `第${current + 1}問`;
  }
  
  // 画像を表示
  if (imageEl) {
    imageEl.src = q.image;
    imageEl.onerror = () => {
      console.error(`画像が読み込めません: ${q.image}`);
    };
  }
  
  // 結果とボタンをリセット
  if (resultEl) {
    resultEl.textContent = "";
  }
  
  if (nextBtn) {
    nextBtn.style.display = "none";
  }
  
  if (explanationBox) {
    explanationBox.style.display = "none";
  }
  
  // 選択肢をランダムに並び替えて表示
  if (choicesEl) {
    choicesEl.innerHTML = "";
    // 選択肢をランダムに並び替え
    const shuffledChoices = shuffleArray([...q.choices]);
    
    shuffledChoices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.textContent = choice;
      button.onclick = () => selectAnswer(choice, button);
      choicesEl.appendChild(button);
    });
  }
}

function selectAnswer(selectedChoice, buttonElement) {
  console.log(`Answer selected: ${selectedChoice}`);
  
  const q = currentQuizData[current];
  const isCorrect = selectedChoice === q.answer;
  
  // 全てのボタンを無効化
  const allButtons = document.querySelectorAll('.choice-btn');
  allButtons.forEach(btn => btn.disabled = true);
  
  // 正解・不正解の色分け
  if (isCorrect) {
    buttonElement.style.backgroundColor = "#4CAF50";
    buttonElement.style.color = "white";
    score++;
    const resultEl = getElement("result");
    if (resultEl) resultEl.innerHTML = `<strong style="color: green;">正解！</strong>`;
  } else {
    buttonElement.style.backgroundColor = "#f44336";
    buttonElement.style.color = "white";
    // 正解の選択肢を緑色にする
    allButtons.forEach(btn => {
      if (btn.textContent === q.answer) {
        btn.style.backgroundColor = "#4CAF50";
        btn.style.color = "white";
      }
    });
    const resultEl = getElement("result");
    if (resultEl) resultEl.innerHTML = `<strong style="color: red;">不正解</strong><br>正解：${q.answer}`;
  }
  
  // 解説を表示
  const explanationBox = getElement("explanation-box");
  const explanationContent = getElement("explanation-content");
  
  if (explanationBox && explanationContent) {
    explanationContent.textContent = q.explanation;
    explanationBox.style.display = "block";
  }
  
  // 次の問題ボタンを表示
  const nextBtn = getElement("next-btn");
  if (nextBtn) {
    nextBtn.style.display = "inline-block";
  }
}

function handleNextQuestion() {
  console.log("handleNextQuestion called");
  current++;
  if (current >= currentQuizData.length) {
    setTimeout(() => {
      showResultScreen();
    }, 500);
  } else {
    showQuestion();
  }
}

// 結果画面
function showResultScreen() {
  console.log("showResultScreen called");
  showScreen("result-screen");
  
  const totalQuestions = currentQuizData.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const finalScoreEl = getElement("final-score");
  const scorePercentageEl = getElement("score-percentage");
  
  if (finalScoreEl) {
    finalScoreEl.textContent = `${score}/${totalQuestions}`;
  }
  
  if (scorePercentageEl) {
    scorePercentageEl.textContent = `${percentage}%`;
  }
  
  // 称号とコメントを更新（HTMLのIDに合わせて修正）
  const titleEl = getElement("title-name"); // user-title → title-name に修正
  const commentEl = getElement("result-comment");
  
  let title = "";
  let comment = "";
  
  if (percentage === 100) {
    title = "洗濯表示の王";
    comment = "ここにおわしましたか、王よ！帰って塾の宿題をやりなさい。";
  } else if (percentage >= 80) {
    title = "洗濯表示のヴェロキラプトル";
    comment = "素晴らしい。ヴェロキラプトルのような智慧を持つ君こそ、『ジュラシック・パークinコインランドリー』のエキストラ候補に相応しい！";
  } else if (percentage >= 60) {
    title = "洗濯表示のいわし缶評論家";
    comment = "なかなかの腕前。繊維を知る者、鰯油を知る者はあれど、これを共に語るは風狂の至芸。嗚呼、妙なるかな。";
  } else if (percentage >= 40) {
    title = "洗濯表示の深湾地区コンテナ群第七棟・タグ復号化オペレータ（見習い）";
    comment = "へえ、タグ言語――ようやく読めるようになったんじゃん。いいか？ 次は“第六”のアクセスキーだ。あそこ取れなきゃ、一生クリーニング済タグの奴隷だぞ？";
  } else if (percentage >= 20) {
    title = "ビギナーズラックが発動しなかったビギナー";
    comment = "現実はそんなものです。まあ、伸びしろがあるってことですから。";    
  } else {
    title = "表面のすり減った洗濯板";
    comment = "まな板にされる前に、少しでも洗濯表示の知識を身に着けておくことをおすすめします。";        
  }
  
  if (titleEl) titleEl.textContent = title;
  if (commentEl) commentEl.textContent = comment;
  
  // 満点の場合は花吹雪エフェクト
  if (percentage === 100) {
    createConfetti();
  }
}

function restartQuiz() {
  console.log("restartQuiz called");
  score = 0;
  current = 0;
  showScreen("quiz-area");
  showQuestion();
}

// 花吹雪エフェクト
function createConfetti() {
  const colors = ['#ff6b6b', '#4CAF50', '#2196F3', '#ffeb3b', '#ff9800'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.zIndex = '1000';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    }, 5000);
  }
}

// 解答一覧を表示（改善版）
// 解答一覧を表示（改善版）
function showAllAnswers() {
  console.log("showAllAnswers called");
  showScreen("answer-list-screen");
  displayAllAnswers();
}

function displayAllAnswers() {
  const container = getElement("answer-list-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  // カテゴリ別に分類
  const categories = [
    {
      title: "洗濯処理",
      items: [
        "洗濯機30℃まで洗濯対応可",
        "洗濯機30℃まで弱い洗濯対応可", 
        "洗濯機30℃までごく弱い洗濯対応可",
        "洗濯機40℃まで洗濯対応可",
        "洗濯機40℃まで弱い洗濯対応可",
        "洗濯機40℃までごく弱い洗濯対応可",
        "洗濯機50℃まで洗濯対応可",
        "洗濯機50℃まで弱い洗濯対応可",
        "洗濯機60℃まで洗濯対応可",
        "洗濯機60℃まで弱い洗濯対応可",
        "洗濯機70℃まで洗濯対応可",
        "洗濯機95℃まで洗濯対応可",
        "家庭での洗濯禁止",
        "手洗い40℃まで対応可",
        "手洗い30℃まで対応可"
      ]
    },
    {
      title: "漂白処理",
      items: [
        "漂白剤使用可",
        "酸素系の漂白剤使用可",
        "漂白剤使用禁止"
      ]
    },
    {
      title: "タンブル乾燥",
      items: [
        "タンブル乾燥80℃まで対応可",
        "タンブル乾燥60℃まで対応可",
        "タンブル乾燥禁止"
      ]
    },
    {
      title: "自然乾燥",
      items: [
        "つり干し",
        "日陰でつり干し",
        "ぬれつり干し",
        "日陰でぬれつり干し",
        "平干し",
        "日陰で平干し",
        "ぬれ平干し",
        "日陰でぬれ平干し"
      ]
    },
    {
      title: "アイロン仕上げ",
      items: [
        "アイロン仕上げ120℃まで対応可",
        "アイロン仕上げ160℃まで対応可",
        "アイロン仕上げ210℃まで対応可",
        "アイロン120℃スチーム禁止",
        "アイロン仕上げ禁止"
      ]
    },
    {
      title: "ドライクリーニング",
      items: [
        "ドライクリーニング対応可",
        "弱いドライクリーニング対応可",
        "ドライクリーニング石油系溶剤のみ対応可",
        "弱いドライクリーニング石油系溶剤のみ対応可",
        "ドライクリーニング禁止"
      ]
    },
    {
      title: "ウエットクリーニング",
      items: [
        "ウエットクリーニング対応可",
        "弱いウエットクリーニング対応可",
        "ごく弱いウエットクリーニング対応可",
        "ウエットクリーニング禁止"
      ]
    }
  ];
  
  // 各カテゴリごとに表示
  categories.forEach(category => {
    // カテゴリヘッダーを作成（descriptionを削除）
    const categoryHeader = document.createElement("div");
    categoryHeader.className = "category-header";
    categoryHeader.innerHTML = `
      <h3 class="category-title">${category.title}</h3>
    `;
    container.appendChild(categoryHeader);
    
    // カテゴリ内のアイテムを表示
    category.items.forEach(itemAnswer => {
      const quiz = quizData.find(q => q.answer === itemAnswer);
      if (quiz) {
        const item = document.createElement("div");
        item.className = "answer-item";
        
        item.innerHTML = `
          <img src="${quiz.image}" alt="洗濯表示" onerror="this.style.display='none'">
          <div class="answer-item-content">
            <div class="answer-item-text">${quiz.answer}</div>
            <div class="answer-item-explanation">${quiz.explanation}</div>
          </div>
        `;
        
        container.appendChild(item);
      }
    });
  });
}

// 結果画面からの解答一覧表示（現在のクイズのみ）
function showAnswerListFromResult() {
  console.log("showAnswerListFromResult called");
  showScreen("answer-list-screen");
  displayAnswerList();
}

function displayAnswerList() {
  const container = getElement("answer-list-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  // 現在のクイズデータのみを表示
  currentQuizData.forEach((quiz, index) => {
    const item = document.createElement("div");
    item.className = "answer-item";
    
    item.innerHTML = `
      <img src="${quiz.image}" alt="洗濯表示" onerror="this.style.display='none'">
      <div class="answer-item-content">
        <div class="answer-item-question">第${index + 1}問</div>
        <div class="answer-item-text">${quiz.answer}</div>
        <div class="answer-item-explanation">${quiz.explanation}</div>
      </div>
    `;
    
    container.appendChild(item);
  });
}

// 説明スライド関数
function showSlide() {
  const explanationText = getElement("explanation-text");
  const progressFill = getElement("progress-fill");
  const prevBtn = getElement("explanation-prev-btn");
  const nextBtn = getElement("explanation-next-btn");
  const restartBtn = getElement("explanation-restart-btn");
  
  if (explanationText) {
    explanationText.textContent = explanationSlides[currentSlide];
  }
  
  if (progressFill) {
    const progress = ((currentSlide + 1) / explanationSlides.length) * 100;
    progressFill.style.width = progress + "%";
  }
  
  if (prevBtn) {
    prevBtn.style.display = currentSlide === 0 ? "none" : "inline-block";
  }
  
  if (currentSlide === explanationSlides.length - 1) {
    if (nextBtn) nextBtn.textContent = "クイズを始める";
    if (restartBtn) restartBtn.style.display = "inline-block";
  } else {
    if (nextBtn) nextBtn.textContent = "次へ";
    if (restartBtn) restartBtn.style.display = "none";
  }
}

// クイズ開始関数
function startFullQuiz() {
  console.log("startFullQuiz called");
  currentQuizData = [...quizData];
  score = 0;
  current = 0;
  showScreen("quiz-area");
  showQuestion();
}

function startRandomQuiz() {
  console.log("startRandomQuiz called");
  currentQuizData = shuffleArray([...quizData]).slice(0, 10);
  score = 0;
  current = 0;
  showScreen("quiz-area");
  showQuestion();
}

// 配列シャッフル関数
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 解答一覧表示関数
function showAnswerList() {
  console.log("showAnswerList called");
  showScreen("answer-list-screen");
  displayAnswerList();
}

// DOMContentLoaded イベントリスナー
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM Content Loaded");
  
  // 初期画面表示
  showScreen("title-screen");
  
  // すべてのイベントリスナーを設定
  const eventListeners = [
    { id: "start-btn", event: "click", handler: showModeScreen },
    { id: "full-quiz-btn", event: "click", handler: () => showExplanationConfirm("full") },
    { id: "random-quiz-btn", event: "click", handler: () => showExplanationConfirm("random") },
    { id: "show-all-answers-btn", event: "click", handler: showAllAnswers },
    { id: "back-to-title-btn", event: "click", handler: () => showScreen("title-screen") },
    { id: "read-explanation-btn", event: "click", handler: showExplanation },
    { id: "skip-explanation-btn", event: "click", handler: startQuizDirectly },
    { id: "back-to-mode-btn", event: "click", handler: showModeScreen },
    { id: "explanation-next-btn", event: "click", handler: nextSlide },
    { id: "explanation-prev-btn", event: "click", handler: prevSlide },
    { id: "explanation-restart-btn", event: "click", handler: restartExplanation },
    { id: "next-btn", event: "click", handler: handleNextQuestion },
    { id: "restart-btn", event: "click", handler: restartQuiz },
    { id: "show-answer-list-btn", event: "click", handler: showAnswerListFromResult },
    { id: "back-to-title-from-result-btn", event: "click", handler: () => showScreen("title-screen") },
    { id: "back-to-mode-from-answer-btn", event: "click", handler: showModeScreen }
  ];
  
  eventListeners.forEach(({ id, event, handler }) => {
    const element = getElement(id);
    if (element) {
      element.addEventListener(event, handler);
      console.log(`Event listener added: ${id} -> ${handler.name || 'anonymous'}`);
    } else {
      console.warn(`Element not found for event listener: ${id}`);
    }
  });
  
  console.log("All event listeners set up successfully");
});

// ...existing code...

function displayQuestion() {
  const questionNumberElement = getElement("question-number");
  const imageElement = getElement("quiz-image");
  const choicesElement = getElement("choices");

  if (!questionNumberElement || !imageElement || !choicesElement) {
    console.error("必要な要素が見つかりません");
    return;
  }

  const currentQuiz = currentQuizData[currentQuestionIndex];
  
  // 問題番号を「第◯問」形式で表示
  questionNumberElement.textContent = `第${currentQuestionIndex + 1}問`;
  
  imageElement.src = currentQuiz.image;
  imageElement.alt = "洗濯表示";
  
  // 選択肢をクリア
  choicesElement.innerHTML = "";
  
  // 選択肢をランダムに並び替え
  const shuffledChoices = shuffleArray([...currentQuiz.choices]);
  
  // 選択肢を追加
  shuffledChoices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.className = "choice-btn";
    button.addEventListener("click", () => selectAnswer(choice));
    choicesElement.appendChild(button);
  });
  
  // 次へボタンと解説エリアを非表示
  const nextBtn = getElement("next-btn");
  const explanationContainer = getElement("explanation-container");
  
  if (nextBtn) nextBtn.style.display = "none";
  if (explanationContainer) explanationContainer.style.display = "none";
}

// 配列をシャッフルする関数（Fisher-Yates アルゴリズム）
function shuffleArray(array) {
  const shuffled = [...array]; // 元の配列を変更しないようにコピー
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ...existing code...

// ...existing code...

// X投稿機能
function shareToTwitter() {
  const totalQuestions = currentQuizData.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // 称号を取得
  let title = "";
  if (percentage === 100) {
    title = "洗濯表示の王";
  } else if (percentage >= 80) {
    title = "洗濯表示のヴェロキラプトル";
  } else if (percentage >= 60) {
    title = "洗濯表示のいわし缶評論家";
  } else if (percentage >= 40) {
    title = "洗濯表示の深湾地区コンテナ群第七棟・タグ復号化オペレータ（見習い）";
  } else if (percentage >= 20) {
    title = "ビギナーズラックが発動しなかったビギナー";
  } else {
    title = "表面のすり減った洗濯板";
  }
  
  // モード別のテキスト
  const modeText = selectedMode === "full" ? "全問チャレンジ" : "ランダム10問";
  
  // 投稿テキストを作成
  const tweetText = `洗濯表示クイズ（${modeText}）に挑戦しました！

結果：${score}/${totalQuestions}問正解（${percentage}%）
称号：${title}

あなたも洗濯表示の知識を試してみませんか？

#洗濯表示クイズ #洗濯表示 #クイズ`;
  
  // 現在のページURLを取得
  const currentUrl = window.location.href;
  
  // X投稿URL作成
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(currentUrl)}`;
  
  // 新しいタブでX投稿画面を開く
  window.open(twitterUrl, '_blank', 'width=550,height=420');
}

// ...existing code...

// DOMContentLoadedイベントリスナー（X投稿ボタンのイベントリスナーを追加）
document.addEventListener('DOMContentLoaded', function() {
  // ...existing code...
  
  // X投稿ボタンのイベントリスナーを追加
  const shareTwitterBtn = getElement("share-twitter-btn");
  if (shareTwitterBtn) {
    shareTwitterBtn.addEventListener("click", shareToTwitter);
    console.log("X投稿ボタンのイベントリスナーを追加しました");
  }
  
  // ...existing code...
});

// ...existing code...

function showSlide() {
  const explanationText = getElement("explanation-text");
  const progressFill = getElement("progress-fill");
  const prevBtn = getElement("explanation-prev-btn");
  const nextBtn = getElement("explanation-next-btn");
  const restartBtn = getElement("explanation-restart-btn");
  
  if (explanationText) {
    explanationText.innerHTML = explanationSlides[currentSlide]; // textContent → innerHTML に変更
  }
  
  // ...existing code...
}

// ...existing code...

// 共通コンポーネントを挿入する関数
function insertVideoLinks(targetSelector) {
  const template = document.getElementById('video-links-template');
  const target = document.querySelector(targetSelector);
  if (template && target) {
    const clone = template.cloneNode(true);
    clone.id = '';
    clone.style.display = '';
    target.appendChild(clone);
  }
}

function insertCredit(targetSelector, includeVideo = false) {
  const template = document.getElementById('credit-template');
  const target = document.querySelector(targetSelector);
  if (template && target) {
    const clone = template.cloneNode(true);
    clone.id = '';
    clone.style.display = '';
    
    if (includeVideo) {
      const videoTemplate = document.getElementById('video-links-template');
      const videoClone = videoTemplate.cloneNode(true);
      videoClone.id = '';
      videoClone.style.display = '';
      clone.appendChild(videoClone);
    }
    
    target.appendChild(clone);
  }
}

// 初期化時に共通コンポーネントを挿入
document.addEventListener('DOMContentLoaded', function() {
  // 動画リンクを各画面に挿入
  insertVideoLinks('#title-screen .video-links-placeholder');
  insertVideoLinks('#explanation-screen .video-links-placeholder');
  insertVideoLinks('#mode-screen .video-links-placeholder');
  insertVideoLinks('#explanation-confirm-screen .video-links-placeholder');
  insertVideoLinks('#quiz-area .video-links-placeholder');
  
  // クレジットを挿入
  insertCredit('#answer-list-screen .credit-placeholder');
  insertCredit('#result-screen .credit-placeholder-with-video', true);
  
  // 既存の初期化処理
  // ...
});
# 引入 e1071 套件
library(e1071)

#資料
data <- read.csv("train_dataset.csv")

#通過抽樣方式，80%用於訓練，20%用於測試
test.index = sample(1:nrow(data), 0.8 * nrow(data))

#宣告函數 放反 text.data 與 train.data 交換
test.data = data[test.index,] 
train.data = data[-test.index,] 

#找出最適合的 gamma cost
#tune_smoking <- tune.svm(smoking ~ ., data = train.data, gamma = 10^(-3:-1), cost = 10^(-1:1))
#summary(tune_smoking)

svm.model <- svm(smoking ~ ., data = train.data, type='C-classification', cost = 10, gamma = 0.01)
summary(svm.model)

svm.pred <- predict(svm.model, train.data[,-23])

(table.svm.test=table(pred = svm.pred, true = train.data[,23]))

correct.svm <- sum(diag(table.svm.test))/sum(table.svm.test)
(correct.svm<-correct.svm*100)
cat("Accuracy:", round(correct.svm, 2), "%\n")

#打印混淆矩陣
print("Confusion Matrix:")
print(table.svm.test)

#將建立的SVM模型保存為一個RData文件
save(svm.model, file="Smoker_Status_Prediction-svm.RData")
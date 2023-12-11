args = commandArgs(TRUE)

age = as.numeric(args[1])
height = as.numeric(args[2])
weight = as.numeric(args[3])
waist = as.numeric(args[4])
eyesight_left = as.numeric(args[5])
eyesight_right = as.numeric(args[6])
hearing_left = as.numeric(args[7])
hearing_right = as.numeric(args[8])
systolic = as.numeric(args[9])
relaxation = as.numeric(args[10])
fasting_blood_sugar = as.numeric(args[11])
cholesterol_total = as.numeric(args[12])
triglyceride = as.numeric(args[13])
hdl_cholesterol = as.numeric(args[14])
ldl_cholesterol = as.numeric(args[15])
hemoglobin = as.numeric(args[16])
urine_protein = as.numeric(args[17])
serum_creatinine = as.numeric(args[18])
ast = as.numeric(args[19])
alt = as.numeric(args[20])
gtp = as.numeric(args[21])
dental_caries = as.numeric(args[22])

# age = 20
# height = 175
# weight = 110
# waist = 110
# eyesight_left = 0.7
# eyesight_right = 0.9
# hearing_left = 1
# hearing_right = 1
# systolic = 119
# relaxation = 79
# fasting_blood_sugar = 88
# cholesterol_total = 211
# triglyceride = 128
# hdl_cholesterol = 71
# ldl_cholesterol = 114
# hemoglobin = 15.9
# urine_protein = 1
# serum_creatinine = 1.1
# ast = 19
# alt = 25
# gtp = 30
# dental_caries = 1

library("e1071")

load("Smoker_Status_Prediction-svm.RData", .GlobalEnv)

smoker <- data.frame(
  age = age,
  height.cm. = height,
  weight.kg. = weight,
  waist.cm. = waist,
  eyesight.left. = eyesight_left,
  eyesight.right. = eyesight_right,
  hearing.left. = hearing_left,
  hearing.right. = hearing_right,
  systolic = systolic,
  relaxation = relaxation,
  fasting.blood.sugar = fasting_blood_sugar,
  Cholesterol = cholesterol_total,
  triglyceride = triglyceride,
  HDL = hdl_cholesterol,
  LDL = ldl_cholesterol,
  hemoglobin = hemoglobin,
  Urine.protein = urine_protein,
  serum.creatinine = serum_creatinine,
  AST = ast,
  ALT = alt,
  Gtp = gtp,
  dental.caries = dental_caries,
  smoking = NA
)

svm.pred <- predict(svm.model, smoker[, -23]) # nolint
ans <- as.vector(svm.pred)

print(ans)

dev.off()
# Load the Model and Tokenizer
import tensorflow as tf
from transformers import TFBertForSequenceClassification, BertTokenizer

model = TFBertForSequenceClassification.from_pretrained("./bert_sentiment_model")
tokenizer = BertTokenizer.from_pretrained("./bert_sentiment_model")

# Input 
text = "The food was amazing and the service was excellent!"

# Tokenize the input
inputs = tokenizer(text, return_tensors="tf", truncation=True, padding=True)

# Make prediction
outputs = model(inputs)
logits = outputs.logits
predicted_class = tf.argmax(logits, axis=1).numpy()[0]

print(f"Predicted class: {predicted_class}")
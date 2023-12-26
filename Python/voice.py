import pyttsx3
engine = pyttsx3.init()
engine.setProperty('rate', 150)  # Điều chỉnh tốc độ (tùy chọn)
engine.setProperty('voice', engine.getProperty('voices')[1].id)  # Chọn giọng nam
engine.say("Xin chào, đây là một ví dụ về giọng nói nam.")
engine.save_to_file("output.mp3")  # Lưu thành file âm thanh
engine.runAndWait()

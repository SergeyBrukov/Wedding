import { NextResponse } from 'next/server';
import aboutData from '../../../../public/data/about.json';

export async function GET() {
  console.log('About data loaded:', {
      "proposal": {
        "title": "Пропозиція",
        "date": "06.12.2023",
        "location": "Буковель",
        "history": {
          "description": "Ми вирішили разом з другом та нашими другими половинками поїхати відпочити кудись, вибір пав на Буковель. Я вирішив в такому гарному місці зробити той самий крок, який наблизив мене ще трошки до щастя, — так, так пропозиція. Перед цим звісно я сказав своїм батькам, поговорив з татом Віки, і ми вирушили в подорож. Думаю, Вікуля все розуміла, оскільки я з собою віз костюм, тому думаю, там все було зрозуміло. Отже, 6-го числа ми забронювали столик в ресторані, з Льошкою домовились з офіціанткою про те, коли винесуть кільце. І вже там під вечір стався цей прекрасний момент пропозиції. І на одне з головних питань мого життя, і без сумніву головне питання тієї подорожі, Вікторія відповіла: 'так'."
        }
      },
      "firstMeeting": {
        "title": "Перша зустріч",
        "date": "01.08.2019",
        "location": "Зупинка біля університету Івана Франка",
        "history": {
          "description": "Був звичайний робочий день, я після роботи йшов додому та планував зустрітись з друзями. Коли я вже майже дійшов додому, мене набрала Іванка та розповіла, що в неї є подруга, якій дуже скучно самій на канікулах, і запропонувала зустрітись. Я подумав, що це якесь 'сватавство' і це буде не просто зустріч, але вирішив, чому б не зустрітись з дівчиною, тим паче у Іванки гарні подружки. Отже, я попросив номер телефону Вікторії і зателефонував. Ми домовились зустрітись ввечері на зупинці біля університету Івана Франка. Тому, не гаючи часу, переодягнувся після роботи і вирушив на зустріч до свого майбутнього кохання.",
          "meetingDetails": "Перша зустріч була звичайною прогулянкою, ми спілкувались на різні теми, дізнавались одне одного. Після цього я провів її додому, і ми розійшлись. Віка мені дуже сподобалась ще при цій першій зустрічі, але оскільки Іванка сказала, що відносини не потрібні Вікторії, я поки і не замислювався про це."
        }
      }
    }
  ); // Логування даних
  return NextResponse.json({
      "proposal": {
        "title": "Пропозиція",
        "date": "06.12.2023",
        "location": "Буковель",
        "history": {
          "description": "Ми вирішили разом з другом та нашими другими половинками поїхати відпочити кудись, вибір пав на Буковель. Я вирішив в такому гарному місці зробити той самий крок, який наблизив мене ще трошки до щастя, — так, так пропозиція. Перед цим звісно я сказав своїм батькам, поговорив з татом Віки, і ми вирушили в подорож. Думаю, Вікуля все розуміла, оскільки я з собою віз костюм, тому думаю, там все було зрозуміло. Отже, 6-го числа ми забронювали столик в ресторані, з Льошкою домовились з офіціанткою про те, коли винесуть кільце. І вже там під вечір стався цей прекрасний момент пропозиції. І на одне з головних питань мого життя, і без сумніву головне питання тієї подорожі, Вікторія відповіла: 'так'."
        }
      },
      "firstMeeting": {
        "title": "Перша зустріч",
        "date": "01.08.2019",
        "location": "Зупинка біля університету Івана Франка",
        "history": {
          "description": "Був звичайний робочий день, я після роботи йшов додому та планував зустрітись з друзями. Коли я вже майже дійшов додому, мене набрала Іванка та розповіла, що в неї є подруга, якій дуже скучно самій на канікулах, і запропонувала зустрітись. Я подумав, що це якесь 'сватавство' і це буде не просто зустріч, але вирішив, чому б не зустрітись з дівчиною, тим паче у Іванки гарні подружки. Отже, я попросив номер телефону Вікторії і зателефонував. Ми домовились зустрітись ввечері на зупинці біля університету Івана Франка. Тому, не гаючи часу, переодягнувся після роботи і вирушив на зустріч до свого майбутнього кохання.",
          "meetingDetails": "Перша зустріч була звичайною прогулянкою, ми спілкувались на різні теми, дізнавались одне одного. Після цього я провів її додому, і ми розійшлись. Віка мені дуже сподобалась ще при цій першій зустрічі, але оскільки Іванка сказала, що відносини не потрібні Вікторії, я поки і не замислювався про це."
        }
      }
    }
  );
}

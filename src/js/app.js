const get_plural_form = (
  value,
  form1 = "балл",
  form2 = "балла",
  form3 = "баллов"
) => {
  if (!isNaN(value)) {
    if (value === 0) return form3;
    const remainder_1 = Math.abs(value) % 100;
    const remainder_2 = value % 10;
    if ((remainder_1 > 10 && remainder_1 < 20) || remainder_1 === 0)
      return form3;
    if (remainder_2 > 1 && remainder_2 < 5) return form2;
    if (remainder_2 === 1) return form1;
  } else {
    console.log("01 Input is not a number");
    return 0;
  }
};

// ВОТ ЗДЕСЬ ИСПОЛЬЗУЮТСЯ ШАБЛОННЫЕ СТРОКИ
const set_message = value => `Ваш баланс: ${value} ${get_plural_form(value)}`;

const sample_data = [523, 6000, 5001, 5013];
for (let value of sample_data) {
  document.getElementById(`data_${value}`).innerHTML = value;
  document.getElementById(`res_${value}`).innerHTML = set_message(value);
  console.log(`Balance: ${value}`);
  console.log(`Message: ${set_message(value)}`);
}

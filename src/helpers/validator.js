
export const isName = (name) => {
  name = cleanString(name);
  if (/^[A-Za-z0-9\s]+$/g.test(name)) {
    if (name.length > 0 && name.length <= 21) return true;
    return false;
  } else {
    return false;
  }
};

export const isBusinessName = (value) => {
  return isStringWithoutMoreOrLess(value);
};

export const selectNull = (id) => {
  return document.getElementById(id).value.length > 1;
};
export const isRequired = (value) => {
  return value.length !== 0;
};
export const validAdress = (value) => {
  return value.length >= 3;
};
export const isChileAdress = (value) => {
  var aux = value.split(",");
  return aux[aux.length - 1].indexOf("Chile") > -1;
};
export const hasMiniumLength = (value, size) => {
  return value.length >= size;
};
export const hasChile = (value) => {
  return value.toLowerCase().indexOf(" chile") !== -1;
};
export const isNumber = (number) => {
  if (/^\d+$/.test(number)) {
    return true;
  } else {
    return false;
  }
};



export const isCellPhone = (cellNumber) => {
  if (/^[0-9]{9}$/.test(cellNumber)) {
    return true;
  } else {
    return false;
  }
};

export const isTelephoneWithOutArea = (telNumber) => {
  if (/^[0-9]{9}$/.test(telNumber)) {
    return true;
  } else {
    return false;
  }
};

export const isBankAccount = (accountNumber) => {
  if (/^[0-9]{1,20}$/.test(accountNumber)) {
    return true;
  } else {
    return false;
  }
};

export const isAreaTelephone = (areaNumber) => {
  if (/^[0-9]{2}$/.test(areaNumber)) {
    return true;
  } else {
    return false;
  }
};

export const cleanStringLetters = (string) => {
  if (string != null) {
    return string
      .replace(/[ÁÀÄÂÃ]/g, "A")
      .replace(/[ÉÈËÊẼ]/g, "E")
      .replace(/[ÍÌÏÎĨ]/g, "I")
      .replace(/[ÓÒÖÔÕ]/g, "O")
      .replace(/[ÚÙÜÛŨ]/g, "U")
      .replace(/[áàäâã]/g, "a")
      .replace(/[éèëêẽ]/g, "e")
      .replace(/[íìïîĩ]/g, "i")
      .replace(/[óòöôõ]/g, "o")
      .replace(/[úùüûũ]/g, "u")
      .replace(/[Ñ]/g, "N")
      .replace(/ñ/g, "n")
      .replace(/\./g, "")
      .trim()
      .split(/ +/)
      .join(" ");
  } else {
    return string;
  }
};

export const cleanString = (string) => {
  if (string != null) {
    return string
      .replace(/[ÁÀÄÂÃ]/g, "A")
      .replace(/[ÉÈËÊẼ]/g, "E")
      .replace(/[ÍÌÏÎĨ]/g, "I")
      .replace(/[ÓÒÖÔÕ]/g, "O")
      .replace(/[ÚÙÜÛŨ]/g, "U")
      .replace(/[áàäâã]/g, "a")
      .replace(/[éèëêẽ]/g, "e")
      .replace(/[íìïîĩ]/g, "i")
      .replace(/[óòöôõ]/g, "o")
      .replace(/[úùüûũ]/g, "u")
      .replace(/[Ñ]/g, "N")
      .replace(/ñ/g, "n")
      .replace(/\./g, "")
      .replace(/,/g, "")
      .trim()
      .split(/ +/)
      .join(" ")
      .toUpperCase();
  } else {
    return string;
  }
};

export const isRut = (rutCompleto) => {

};

export const isEmptyString = (text) => {
  return !text || !text.trim().length;
};

/*export const isValidDate = (date) => {
  return moment(date, "DD-MM-YYYY").isValid();
}*/

export const isIdForCountry = (id, country) => {
  switch (country.toLowerCase()) {
    case "cl":
      return isRut(id);
    default:
      return false;
  }
};

export const returIdWithoutFormat = (id) => {
  id = id.replace(/[\W_]/g, "");
  const rut = id.substring(0, id.length - 1);
  let verificador = id.substring(id.length - 1, id.length);
  if (isNaN(verificador)) {
    verificador = verificador.toUpperCase();
  }
  return `${rut}${verificador}`;
};

export const isValidCountry = (countryId) => {
  const validCountries = ["CL", "AR", "MX", "CO", "PE"];
  let res = false;

  if (countryId) {
    res = validCountries.includes(countryId.toUpperCase());
  }

  return res;
};

export const isValidDocumentType = (countryId, documentTypeId) => {
  const validDocumentTypes = {
    CL: ["RUT"],
    PE: ["DNI", "CE"],
    CO: ["CC", "NIT", "CE", "TI", "PAS", "CO"],
    AR: ["LE", "DNI", "CI", "LC", "TJP"],
  };
  return (
    validDocumentTypes[countryId.toUpperCase()] !== undefined &&
    validDocumentTypes[countryId.toUpperCase()].includes(
      documentTypeId.toUpperCase()
    )
  );
};

export const isValidId = (id, docType) => {
  switch (docType) {
    case "RUT":
      return isRut(id);
    default:
      return false;
  }
};

export const isPhoneChile = (numberPhone) => {
  if (
    !numberPhone ||
    numberPhone === "" ||
    numberPhone === null ||
    numberPhone === undefined
  ) {
    return false;
  }

  if (numberPhone[0] === "+") {
    numberPhone = numberPhone.substring(1, numberPhone.length);
  }
  const test = /^(\+?56)?(\s|-?)(0?[1-9])(\s|-?)[987654321]\d{6}$/;
  var phoneReg = new RegExp(test);

  return phoneReg.test(numberPhone);
};

export const isPhoneForCountry = (country, phone) => {
  switch (country.toLowerCase()) {
    case "cl":
      return isPhoneChile(phone);
    default:
      return false;
  }
};

export const containsValue = (stringToCompare, originalString) => {
  if (originalString.indexOf(stringToCompare) > -1) return true;
  return false;
};

export const repeatValue = (value) => {
  const test = /(.)\1{3}/;
  var repeatVal = new RegExp(test);
  return repeatVal.test(value);
};

export const isConsecutiveNumber = (value) => {
  if (value.length <= 2) return false;
  const pattern = "0123456789876543210";
  if (pattern.indexOf(value) !== -1) return true;
  return false;
};

export const isConsecutiveCharacter = (value) => {
  if (value.length <= 2) return false;
  const test = /(.)\1\1/;
  const repeatVal = new RegExp(test);
  return repeatVal.test(value);
};

export const isCorrectLength = (value, sz = 6) => {
  if (value.length === sz) return true;
  return false;
};

export const isValidNumericPassword = (pass, rut, phone = "") => {
  return (
    !containsValue(pass, rut) &&
    !isConsecutiveNumber(pass) &&
    !repeatValue(pass) &&
    !containsValue(pass, phone) &&
    isNumber(pass) &&
    isCorrectLength(pass)
  );
};

export const docTypeByCountryToNumberMap = {
  CL: {
    RUT: "01",
  },
  PE: {
    DNI: "1",
    CE: "4",
  },
  CO: {
    CC: "1",
    NIT: "2",
    CE: "3",
    TI: "4",
    PAS: "5",
    CO: "6",
  },
  AR: {
    LE: "LE",
    DNI: "DNI",
    CI: "CI",
    LC: "LC",
    TJP: "TJP",
  },
};

export const getDocTypeNumberByCountry = (country, docType) => {
  return docTypeByCountryToNumberMap[country.toUpperCase()][
    docType.toUpperCase()
  ];
};

export const isStringWithoutMoreOrLess = (string) => {
  return string.match(/[<>]/) == null;
};

export const isStringWithoutSpecialCharacters = (string) => {
  return string.match(/^[0-9a-zA-Z]+$/) != null;
};
export const isStringWithSpacesWithoutSpecialCharacters = (string) => {
  return string.match(/^[0-9a-zA-Z ]+$/) != null;
};
export const isStringWithSpacesWithAccentsWithoutSpecialCharacters = (
  string
) => {
  return string.match(/^[0-9A-Za-zÀ-ÖØ-öø-ÿ ]+$/) != null;
};
export const isStringWithoutSpecialCharactersAndNumbers = (string) => {
  return string.match(/^[a-zA-Z ]+$/) != null;
};
export const isStringWithSpacesWithoutSpecialCharactersAndNumbers = (
  string
) => {
  return string.match(/^[a-zA-Z\s]*$/) != null;
};
export const isStringWithoutSpecialCharactersAndNumbersAndSpaces = (string) => {
  return string.match(/^[a-zA-Z]+$/) != null;
};
export const areTwoWords = (string) => {
  return (
    cleanStringLetters(string).match(/^([a-zA-Z]{1,}\s?([a-zA-z]{1,})?)$/) !=
    null
  );
};
export const hasNameLength = (string) => {
  return string.length > 2 && string.length < 21;
};

export const isValidEmail = (email) => {
  var aux = email.split("");
  let indexArroba = -1;
  let indexPunto = -1;
  aux.forEach((elm, i) => {
    if (elm === "@") {
      indexArroba = i;
    }
    if (elm === ".") {
      if (i < aux.length - 1) {
        indexPunto = i;
      }
    }
  });
  return indexArroba < indexPunto && indexArroba > 0;
};

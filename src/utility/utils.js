"use client";
const shortNameAvatar = (name) => {
  const namePart = name.split(" ");
  const arrayOfFirstCrt = namePart.map((part) => part.charAt(0));
  const shortName = arrayOfFirstCrt.join("").slice(0, 2);
  return shortName;
};

export { shortNameAvatar };

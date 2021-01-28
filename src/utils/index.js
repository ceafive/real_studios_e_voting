export const addVoter = (data) => {
  const userData = { ...data };

  const voterOTP = Math.floor(100000 + Math.random() * 900000);
  userData.otp = voterOTP;

  const storageData = localStorage.getItem("real_studios");
  if (!storageData) {
    const allUsers = [userData];
    localStorage.setItem("real_studios", JSON.stringify({ voters: allUsers }));
  } else {
    const parsedData = JSON.parse(storageData);
    const data = parsedData["voters"];
    if (data) {
      const newUsersArray = [...data];
      newUsersArray.push(userData);
      localStorage.setItem(
        "real_studios",
        JSON.stringify({ ...parsedData, voters: newUsersArray })
      );
    } else {
      const allUsers = [userData];
      localStorage.setItem(
        "real_studios",
        JSON.stringify({ ...parsedData, voters: allUsers })
      );
    }
  }
};

export const addCandidate = (data) => {
  const colors = [
    "Blue",
    "Yellow",
    "Black",
    "Green",
    "Cyan",
    "Indigo",
    "Magenta",
  ];

  const userData = { ...data };
  userData.team = colors[Math.floor(Math.random() * colors.length)];
  userData.position = Number(userData.position);

  const group = userData.position;

  delete userData.position;

  const storageData = localStorage.getItem("real_studios");
  if (!storageData) {
    const candidates = {
      [group]: {
        id: group,
        members: [userData],
      },
    };
    localStorage.setItem("real_studios", JSON.stringify({ candidates }));
  } else {
    const parsedData = JSON.parse(storageData);
    const data = parsedData["candidates"];
    if (data) {
      const newCandidatesObject = { ...data };

      const returnedGroupObject = newCandidatesObject[group];
      if (returnedGroupObject) {
        const currentMembers = [...returnedGroupObject.members];
        currentMembers.push(userData);

        localStorage.setItem(
          "real_studios",
          JSON.stringify({
            ...parsedData,
            candidates: {
              ...newCandidatesObject,
              [group]: { ...returnedGroupObject, members: currentMembers },
            },
          })
        );
      } else {
        const newData = {
          id: group,
          members: [userData],
        };

        localStorage.setItem(
          "real_studios",
          JSON.stringify({
            ...parsedData,
            candidates: {
              ...newCandidatesObject,
              [group]: newData,
            },
          })
        );
      }
    } else {
      const candidates = {
        [group]: {
          id: group,
          members: [userData],
        },
      };

      localStorage.setItem(
        "real_studios",
        JSON.stringify({ ...parsedData, candidates })
      );
    }
  }
};

export const sendOTP = async (to, text) => {
  const res = {};
  const msgData = {
    to,
    p: "s9O2VGuk35YnOpFqphK26FZvzOLa9kvM7nTyqMfMLfqgpqPrpmSXgnyDo8SRI6M7",
    text,
    json: "1",
  };

  try {
    const response = await fetch("https://sms77io.p.rapidapi.com/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": "fd7035aafcmshdd82fef926fb369p1d71efjsn3a00721b0312",
        "x-rapidapi-host": "sms77io.p.rapidapi.com",
      },
      body: JSON.stringify(msgData),
    });

    const data = await response.json();
    // console.log(data);
    return (res.success = data);
  } catch (error) {
    console.log(error);
    return (res.error = error);
  }
};

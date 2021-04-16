import React from "react";
import { backend } from "../config/server";
const token = localStorage.getItem("react-crm-token");

export function getStylesByProjectStatus(item) {
  switch (item.status) {
    case "1":
      return {
        labelColor: "#9cd69b",
        statusText: "Авторизовано",
      };
    case "2":
      return {
        labelColor: "#e8df6b",
        statusText: "Авторизовано частично",
      };
    case "3":
      return {
        labelColor: "#efb6b6",
        statusText: "Не авторизовано",
      };
    case "4":
      return {
        labelColor: "#688cbc",
        statusText: "На авторизации",
      };
    case "5":
      return {
        labelColor: "#688cbc",
        statusText: "Запрос актуальности",
      };
    case "6":
      return {
        labelColor: "#688cbc",
        statusText: "Завершено",
      };
    default:
      return {
        labelColor: "black",
        statusText: "Ошибка определения статуса",
      };
  }
}

export function sortToolsByStatus(unsortedTools, toolsList) {
  const resultObj = {};
  if (unsortedTools.length !== 0) {
    unsortedTools.forEach((tool) => {
      if (!Array.isArray(resultObj[tool.status_id]))
        resultObj[tool.status_id] = [];
      const metaTool = toolsList.find((item) => +item.id === +tool.tool_id);
      metaTool.p_id = tool.id;
      resultObj[tool.status_id].push(metaTool);
    });
    let maxLength = 0;
    for (let statusKey in resultObj) {
      if (resultObj[statusKey].length > maxLength) {
        maxLength = resultObj[statusKey].length;
      }
    }
    resultObj["max"] = maxLength;
    return resultObj;
  }
}
export function sendProjectComment(project, comment: string, user?) {
  let data = new FormData();
  data.append("entity_id", project.id);
  data.append("comment", comment);
  return fetch(`${backend}/api/project/comment`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: data,
  })
  .then((res) => res.json())
}

export function getProjectComments(project) {
  let data = new FormData();
  data.append("entity_id", project.id);
  return fetch(`${backend}/api/project/commentlist`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: data,
  })
  .then((res) => res.json())
}
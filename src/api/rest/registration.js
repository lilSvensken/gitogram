import { makeRequest } from "@/api/requests";
/** Регистарция в текущем OAuth
 * @param {String} clientId - из OAuth (устанавливается в настройках GitHub автора этого проекта)
 * @param {String} code - код который вернет вам github после авторизиции пользователя
 * @param {String} clientSecret - из OAuth (устанавливается в настройках GitHub автора этого проекта)
 * */
export const registration = (clientId, code, clientSecret) => {
  return makeRequest(
    {
      url: `/github`,
      method: "POST",
      data: {
        clientId,
        code,
        clientSecret,
      },
    },
    true
  );
};

import { padTo2Digits } from "./AuthorPage.config";
import telegramIcon from "../../../../assets/telegram_mini.svg";
import vkIcon from "../../../../assets/vk_mini.svg";

export default function GeneralInfo({ author }) {
  if (author.info)
    return (
      <div>
        <h4 className="text-monochrome_02 mt-[8px]">Основная информация:</h4>
        <ul className="mt-[10px] text-[18px]">
          <li className="grid grid-cols-2">
            {author.info.sex && (
              <>
                <p>Пол:</p>
                <p className="text-right text-monochrome_02">
                  {(() => {
                    if (author.info.sex === "male") return "мужской";
                    if (author.info.sex === "female") return "женский";
                  })()}
                </p>
              </>
            )}
          </li>

          <li className="grid grid-cols-2">
            {author.info.birthsday && (
              <>
                <p>День рождения:</p>
                <p className="text-right text-monochrome_02">
                  {(() => {
                    const birthsYear = author.info.birthsday.getFullYear();
                    const birthsMonth = padTo2Digits(
                      author.info.birthsday.getMonth() + 1
                    );
                    const birthsDay = padTo2Digits(
                      author.info.birthsday.getDate()
                    );

                    const fullBirthsDate = [
                      birthsDay,
                      birthsMonth,
                      birthsYear,
                    ].join(".");

                    return fullBirthsDate;
                  })()}
                </p>
              </>
            )}
          </li>
          <li className="grid grid-cols-2">
            {author.info.contacts && (
              <>
                <p>Контакты:</p>
                <ul>
                  <div className="text-right text-monochrome_02">
                    {author.info.contacts.telegram && (
                      <li>
                        <p className="inline-block">
                          {author.info.contacts.telegram}
                        </p>
                        <img
                          className="w-[20px] inline-block ml-[4px]"
                          src={telegramIcon}
                          alt="telegram иконка"
                        />
                      </li>
                    )}
                    {author.info.contacts.vk && (
                      <li>
                        <p className="inline-block">
                          {author.info.contacts.vk}
                        </p>
                        <img
                          className="w-[20px] inline-block ml-[4px]"
                          src={vkIcon}
                          alt="vk иконка"
                        />
                      </li>
                    )}
                  </div>
                </ul>
              </>
            )}
          </li>
        </ul>
      </div>
    );
  else {
    return (
      <div className="min-h-[120px]">
        <h4 className="text-monochrome_02 mt-[8px]">Основная информация:</h4>
        <p className="text-monochrome_03 text-[20px] mt-[16px]">
          Автор предпочел не оставлять информацию о себе
        </p>
      </div>
    );
  }
}

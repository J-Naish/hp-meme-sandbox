import styles from './Info.module.css';

import Background from '@/components/common/UI/background/Background';

const languageMapping = {
  NAME: {
    en: "Company Name",
    ja: "社名"
  },
  name: {
    en: "Meme LLC",
    ja: "合同会社Meme"
  },
  ESTABLISHED: {
    en: "Established",
    ja: "設立"
  },
  established: {
    en: "March 2022",
    ja: "2022年3月"
  },
  LOCATION: {
    en: "Headquarters",
    ja: "所在地"
  },
  location: {
    en: "2-57-19 Kikunodai, Chofu City, Tokyo 182-0007, Japan",
    ja: "〒182-0007  東京都調布市菊野台2-57-19"
  },
  REPRESENTATIVE: {
    en: "Representative",
    ja: "代表者"
  },
  representative: {
    en: "Shogo Hayashida",
    ja: "林田将吾"
  },
  CONTACT: {
    en: "Contact",
    ja: "連絡先"
  },
  contact: {
    email: {
      en: "info@llcmeme.com",
      ja: "info@llcmeme.com"
    },
    phone: {
      en: "+81 80 9288 2539",
      ja: "080-9288-2539"
    }
  },
  BUSINESS: {
    en: "Business",
    ja: "事業内容"
  },
  business: {
    service1: {
      en: "Social media support and development",
      ja: "SNS運用支援事業及び開発事業"
    },
    service2: {
      en: "Development",
      ja: "開発事業"
    },
  }
}


export default function Info({ language }) {
  return (
    <>
      <div className={styles.container}>

        <Background />

        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>Company Info</h1>
            </div>
            <CompanyInfoTable language={language} />
          </div>
        </div>

      </div>

    </>
  );
}


// company info table
function CompanyInfoTable({ language }) {
  return (
    <div className={styles.table}>
      <div className={styles.tableItem}>
        <div className={styles.leftTableItem}>{languageMapping.NAME[language]}</div>
        <div className={styles.rightTableItem}>{languageMapping.name[language]}</div>
      </div>
      <div className={styles.tableItem}>
        <div className={styles.leftTableItem}>{languageMapping.ESTABLISHED[language]}</div>
        <div className={styles.rightTableItem}>{languageMapping.established[language]}</div>
      </div>
      <div className={styles.tableItem}>
        <div className={styles.leftTableItem}>{languageMapping.LOCATION[language]}</div>
        <div className={styles.rightTableItem}>{languageMapping.location[language]}</div>
      </div>
      <div className={styles.tableItem}>
        <div className={styles.leftTableItem}>{languageMapping.REPRESENTATIVE[language]}</div>
        <div className={styles.rightTableItem}>{languageMapping.representative[language]}</div>
      </div>
      <div className={styles.tableItem}>
        <div className={styles.leftTableItem}>{languageMapping.CONTACT[language]}</div>
        <div className={styles.rightTableItem}>{languageMapping.contact.email[language]}</div>
      </div>
      <div className={styles.tableItem}>
        <div className={styles.leftTableItem}>{languageMapping.BUSINESS[language]}</div>
        <div className={styles.rightTableItem}>{languageMapping.business.service1[language]}</div>
      </div>
      <div className={styles.tableItem}></div>
    </div>
  )
}
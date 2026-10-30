export type Clause = {
  label: string
  paragraphs?: string[]
  bullets?: string[]
  letters?: string[]
}

export type Definition = {
  term: string
  meaning: string
  /** Joiner between the quoted term and the meaning. Defaults to "means". */
  connector?: string
}

export type TermsSection = {
  id: string
  number: string
  title: string
  intro?: string
  definitions?: Definition[]
  clauses: Clause[]
}

export const introParagraphs = [
  "Welcome to Akiba by Griffin Finance Limited (“Akiba” or “the Platform”), Griffin Finance Limited’s digital channel.",
  "Griffin Finance Limited (“GFL”, “Company”, “we”, “us” or “our”) is a Finance Company duly incorporated under the laws of the Federal Republic of Nigeria and licensed by the Central Bank of Nigeria (“CBN”) to provide financial services to individuals, households and businesses. We provide tailored financing solutions designed to empower individuals, microbusinesses, and growing enterprises. Our services combine accessible investment solutions and consumer lending to support financial growth at every stage, with a focus on convenience and innovation to unlock financial freedom for our clients.",
  "These Terms and Conditions (the “Terms”) govern your access to and use of the Platform and provides you with information about the services made available through Akiba by Griffin Finance Limited.",
  "The Terms may be varied and supplemented from time to time. By downloading, registering on, accessing or using Akiba, you confirm that you have read, understood and agreed to be bound by these Terms, our Privacy Policy and any other terms, policies or product-specific terms applicable to the services you use and any subsequent modifications thereto.",
]

export const termsSections: TermsSection[] = [
  {
    id: "definitions",
    number: "1",
    title: "DEFINITIONS",
    intro: "For purposes of these Terms:",
    definitions: [
      {
        term: "Account",
        meaning:
          "any Griffin Finance Limited account that you may create on the Griffin Finance Limited’s Akiba app that allows you to access and manage your Griffin Finance Limited account via the App or any other means.",
      },
      {
        term: "App",
        meaning: "the Akiba mobile application and any updates, modifications or successor applications.",
      },
      {
        term: "Applicable Law",
        meaning:
          "all applicable laws, regulations, rules, guidelines, directives, circulars, regulatory requirements and applicable industry standards in force in Nigeria from time to time.",
      },
      {
        term: "Investment Plan",
        meaning: "any investment or funds-management product made available by the Company through the App.",
      },
      {
        term: "Credit Facility",
        meaning: "any credit products that may be made available or offered by the Company to an eligible Customer through the App.",
      },
      {
        term: "Personal Data",
        meaning: "has the meaning assigned to it under the Nigeria Data Protection Act 2023 (“NDPA”).",
        connector: "",
      },
      {
        term: "Services",
        meaning:
          "the financial products and services made available by the Company through the App, including Investment Plans and lending services, subject to the Company's regulatory permissions and the applicable product terms.",
      },
      {
        term: "Customer”, “you” or “your",
        meaning: "a person who accesses, registers on or uses the App or any of the Services.",
      },
    ],
    clauses: [],
  },
  {
    id: "about-the-company",
    number: "2",
    title: "ABOUT THE COMPANY",
    clauses: [
      {
        label: "2.1",
        paragraphs: [
          "The Company is a financial institution licensed and regulated by the CBN to undertake permissible Finance Company activities.",
        ],
      },
      {
        label: "2.2",
        paragraphs: [
          "The Company shall provide only those products and services that are permitted under its licence and Applicable Law.",
        ],
      },
      {
        label: "2.3",
        paragraphs: [
          "The App may from time to time provide access to investment/fund management products, lending products and other financial services which the Company is legally permitted to provide.",
        ],
      },
      {
        label: "2.4",
        paragraphs: [
          "Nothing in these Terms constitutes an offer to accept deposits or operate a deposit account. Any product described as a savings, savings plan, wealth plan, investment plan or similar product shall constitute an investment or fund management product only where so designated by the Company and shall be governed by the applicable product-specific terms.",
        ],
      },
      {
        label: "2.5",
        paragraphs: [
          "Where a particular Service is provided by a third party or another regulated entity, the relevant third party's terms and conditions shall also apply.",
        ],
      },
    ],
  },
  {
    id: "eligibility",
    number: "3",
    title: "ELIGIBILITY",
    clauses: [
      {
        label: "3.1",
        paragraphs: ["To register for an Account, you must:"],
        letters: [
          "be at least 18 years old, unless otherwise permitted by Applicable Law and expressly stated by the Company;",
          "have legal capacity to enter into a binding contract;",
          "reside in the Federal Republic of Nigeria;",
          "provide accurate, complete and current information;",
          "satisfy the Company's applicable KYC, AML/CFT and customer verification requirements; and",
          "meet any additional eligibility criteria applicable to a particular Service.",
        ],
      },
      {
        label: "3.2",
        paragraphs: [
          "The Company may refuse an application, restrict access to a Service or require additional information where this is necessary to comply with Applicable Law, regulatory requirements, risk-management requirements or the Company's internal policies.",
        ],
      },
    ],
  },
  {
    id: "account-registration",
    number: "4",
    title: "ACCOUNT REGISTRATION AND CUSTOMER INFORMATION",
    clauses: [
      {
        label: "4.1",
        paragraphs: [
          "You must provide accurate and complete information when creating your Account and whenever requested by the Company.",
        ],
      },
      {
        label: "4.2",
        paragraphs: ["You must promptly notify the Company where any information you have provided changes."],
      },
      {
        label: "4.3",
        paragraphs: [
          "The Company may verify information provided by you using information from you, publicly available sources, credit reference agencies, financial institutions, government databases, identity-verification providers and other lawful proprietary or third-party sources, for purposes such as customer identification, due diligence, credit assessment, fraud prevention, risk management and regulatory compliance or effective management of the Account.",
        ],
      },
      {
        label: "4.4",
        paragraphs: [
          "You authorise the Company to conduct such verification and due diligence as may be necessary to establish and maintain your relationship with the Company.",
        ],
      },
      {
        label: "4.5",
        paragraphs: [
          "The Company may request additional documents or information at any time for KYC, AML/CFT, fraud prevention, credit assessment, regulatory or other lawful purposes, and you agree to honour such requests promptly and truthfully.",
        ],
      },
      {
        label: "4.6",
        paragraphs: [
          "You hereby confirm that the sources of all funds to be transmitted via Akiba are legitimate and are not the proceeds of any crime or illegal activity under any law currently in force. Additionally, you agree to provide reasonable supporting information or documentation concerning the source, ownership or purpose of such funds when requested by the Company for lawful due diligence, risk management or regulatory compliance.",
        ],
      },
      {
        label: "4.7",
        paragraphs: [
          "Where you fail to provide the necessary information as set out in this section 4, you acknowledge that the Company may suspend your Account and/or place a restriction on your use of the Account (with no recourse to you) until such required information is provided. You agree that the Company shall bear no liability for any restriction validly placed on your Account.",
        ],
      },
    ],
  },
  {
    id: "electronic-communications",
    number: "5",
    title: "ELECTRONIC COMMUNICATIONS AND CONSENT",
    clauses: [
      {
        label: "5.1",
        paragraphs: [
          "You consent to receiving communications from the Company electronically, including through the App, SMS, email, telephone, push notifications and other electronic channels.",
        ],
      },
      {
        label: "5.2",
        paragraphs: [
          "You agree that electronic communications, records, notices, statements, confirmations and transaction notifications issued by the Company may satisfy any legal requirement for written communication, to the extent permitted by Applicable Law.",
        ],
      },
      {
        label: "5.3",
        paragraphs: [
          "You are responsible for ensuring that your registered telephone number, email address and other contact details remain current and is able to receive such communications at all times.",
        ],
      },
      {
        label: "5.4",
        paragraphs: [
          "You may be required to provide express consent before certain communications or transactions are processed electronically.",
        ],
      },
      {
        label: "5.5",
        paragraphs: [
          "The service may be subject to limitations and interruptions due to reasons beyond our control including, but not limited to, Acts of God, wars, riots or other major upheaval, labour strike, government or regulatory restrictions, terrorism, lock out or other industrial action, accidental, mechanical or electrical breakdown, faults arising from relevant service providers, or other reasons beyond our reasonable control, and you agree that we will not be liable for any disruptions to the service for such reasons.",
        ],
      },
      {
        label: "5.6",
        paragraphs: [
          "You may be subject to charges for such communications from your service provider. You are fully liable for any fees incurred from your service providers.",
        ],
      },
    ],
  },
  {
    id: "data-protection",
    number: "6",
    title: "DATA PROTECTION AND CONSENT TO PROCESSING",
    clauses: [
      {
        label: "6.1",
        paragraphs: [
          "The Company shall collect, use, store, disclose and otherwise process your Personal Data in accordance with the NDPA, Applicable Law and the Company's Privacy Policy.",
        ],
      },
      {
        label: "6.2",
        paragraphs: [
          "By registering for an Account and using the App, you acknowledge that the Company may process Personal Data provided by you or obtained from lawful sources for purposes including but not limited to:",
        ],
        bullets: [
          "opening and managing your Account;",
          "providing and administering the Services;",
          "processing transactions;",
          "verifying your identity and conducting KYC;",
          "conducting AML/CFT/CPF, sanctions, fraud and financial-crime screening;",
          "assessing applications for Loans and other financial products;",
          "carrying out credit checks and credit risk assessments;",
          "administering, recovering and enforcing Loans;",
          "managing Investment Plans and investment instructions;",
          "complying with legal, regulatory and reporting obligations;",
          "preventing, detecting and investigating fraud, money laundering and other unlawful activities;",
          "improving the App and our products and services;",
          "providing customer support and resolving complaints;",
          "conducting audits, risk assessments and internal investigations;",
          "exercising or defending legal rights and claims; and",
          "carrying out other purposes disclosed to you at the point of collection or otherwise permitted by Applicable Law.",
        ],
      },
      {
        label: "6.3",
        paragraphs: [
          "Where processing is based on consent, you acknowledge that your consent shall be obtained in accordance with Applicable Law and may be withdrawn where legally permissible.",
        ],
      },
      {
        label: "6.4",
        paragraphs: [
          "Withdrawal of consent shall not affect processing requests carried out before the withdrawal and shall not affect processing which the Company is otherwise legally entitled or required to undertake without consent.",
        ],
      },
      {
        label: "6.5",
        paragraphs: [
          "Certain Personal Data and processing activities are necessary for the Company to provide particular Services. Where you refuse to provide information that is necessary for such Services, the Company may be unable to provide or continue providing the relevant Service.",
        ],
      },
      {
        label: "6.6",
        paragraphs: [
          "The Company may process information relating to your transactions, Account activity, device information, location information, IP address, usage information and other technical information necessary for security, fraud prevention, service delivery and compliance.",
        ],
      },
      {
        label: "6.7",
        paragraphs: [
          "Where legally permitted, the Company may use automated systems, scoring models and other technology in assessing transactions, credit applications, fraud risks and eligibility for particular products. Where Applicable Law provides rights in relation to solely automated decision-making, such rights shall apply.",
        ],
      },
    ],
  },
  {
    id: "data-sharing",
    number: "7",
    title: "DATA SHARING AND DISCLOSURE",
    clauses: [
      {
        label: "7.1",
        paragraphs: [
          "You authorise the Company, subject to Applicable Law, to disclose relevant Personal Data and financial information to the underlisted as may be applicable:",
        ],
        letters: [
          "regulators and governmental authorities;",
          "law enforcement and financial intelligence authorities;",
          "credit reference agencies and credit bureaux, recovery agencies;",
          "payment processors, banks and other financial institutions;",
          "third party service providers required to provide the services contemplated under these Terms, including but not limited to identity verification, KYC and customer due diligence service providers;",
          "fraud prevention and transaction monitoring providers;",
          "technology, cloud, cybersecurity and telecommunications service providers;",
          "debt collection and recovery service providers;",
          "professional advisers, auditors and consultants;",
          "insurers and other service providers where applicable;",
          "entities involved in a merger, acquisition, restructuring, financing or sale of all or part of the Company's business; and",
          "other persons where disclosure is required, permitted or authorised by Applicable Law.",
        ],
      },
      {
        label: "7.2",
        paragraphs: [
          "Any third-party processor engaged by the Company shall be required to process Personal Data in accordance with Applicable Law and the Company's contractual requirements.",
        ],
      },
      {
        label: "7.3",
        paragraphs: [
          "Personal Data may be transferred outside Nigeria where permitted by Applicable Law and subject to appropriate safeguards.",
        ],
      },
      {
        label: "7.4",
        paragraphs: [
          "The Company shall not sell your Personal Data merely for the purpose of permitting third parties to market their products to you.",
        ],
      },
    ],
  },
  {
    id: "marketing",
    number: "8",
    title: "MARKETING COMMUNICATIONS",
    clauses: [
      {
        label: "8.1",
        paragraphs: [
          "Subject to your consent where required by Applicable Law, you may receive marketing communications from the Company concerning products, services, promotions, investment opportunities and other information which may be relevant to you.",
        ],
      },
      {
        label: "8.2",
        paragraphs: [
          "You may withdraw your consent to direct marketing at any time by using the unsubscribe mechanism provided in the communication or by contacting the Company through the designated customer service channel.",
        ],
      },
      {
        label: "8.3",
        paragraphs: [
          "Withdrawal of marketing consent shall not affect your receipt of essential service, transactional, security, regulatory or other non-marketing communications.",
        ],
      },
    ],
  },
  {
    id: "account-security",
    number: "9",
    title: "ACCOUNT SECURITY",
    clauses: [
      {
        label: "9.1",
        paragraphs: [
          "You are responsible for maintaining the confidentiality and security of your login credentials, PINs, passwords, authentication codes and devices used to access the App.",
        ],
      },
      {
        label: "9.2",
        paragraphs: [
          "You must NOT disclose your PIN, password, one-time password (“OTP”) or authentication credentials to any person, including any employee or representative of the Company.",
        ],
      },
      {
        label: "9.3",
        paragraphs: [
          "The Company will not request your complete password, PIN or OTP through unsolicited communication or channel.",
        ],
      },
      {
        label: "9.4",
        paragraphs: [
          "You must immediately notify the Company if you suspect that your Account, device or credentials have been compromised.",
        ],
      },
      {
        label: "9.5",
        paragraphs: [
          "You shall be responsible for transactions authenticated using your credentials, except to the extent that Applicable Law provides otherwise or the transaction resulted from the Company's negligence, fraud or wilful misconduct.",
        ],
      },
      {
        label: "9.6",
        paragraphs: [
          "You will notify us immediately you notice any unusual, suspicious or fraudulent activity in your account",
        ],
      },
      {
        label: "9.7",
        paragraphs: [
          "You agree to comply with any additional security measures and requirements that we may require in connection with the provided services,",
        ],
      },
    ],
  },
  {
    id: "investment-services",
    number: "10",
    title: "INVESTMENT AND FUND MANAGEMENT SERVICES",
    clauses: [
      {
        label: "10.1",
        paragraphs: [
          "Subject to eligibility and the applicable product terms, you may use the App to access Investment Plans or other funds-management products offered by the Company.",
        ],
      },
      {
        label: "10.2",
        paragraphs: ["Each Investment Plan shall be governed by specific product terms which may specify:"],
        bullets: [
          "minimum investment amount;",
          "investment tenor;",
          "applicable return or yield;",
          "maturity date;",
          "withdrawal/redemption conditions;",
          "applicable fees and charges;",
          "applicable taxes;",
          "early withdrawal conditions; and",
          "other material risk and other conditions relevant to the investment.",
        ],
      },
      {
        label: "10.3",
        paragraphs: [
          "You acknowledge that returns on an Investment Plan shall be determined in accordance with the applicable product terms.",
        ],
      },
      {
        label: "10.4",
        paragraphs: [
          "Unless expressly stated otherwise, an Investment Plan is not a bank deposit and is not represented as a deposit-taking product.",
        ],
      },
      {
        label: "10.5",
        paragraphs: [
          "You shall not make an investment based solely on projected returns without considering the applicable product terms, risks, fees and applicable withdrawal restrictions.",
        ],
      },
      {
        label: "10.6",
        paragraphs: [
          "The Company may reject, suspend or delay an investment instruction where reasonably necessary to comply with any Applicable Law, prevent fraud or fulfil regulatory, operational or risk-management requirements.",
        ],
      },
      {
        label: "10.7",
        paragraphs: [
          "You understand that activities undertaken on the App will be subject to regulatory taxes and fees, as applicable.",
        ],
      },
    ],
  },
  {
    id: "investment-instructions",
    number: "11",
    title: "INVESTMENT INSTRUCTIONS AND WITHDRAWALS",
    clauses: [
      {
        label: "11.1",
        paragraphs: [
          "An investment instruction submitted through the App shall constitute an instruction by you to the Company to process the investment in accordance with the applicable product terms.",
        ],
      },
      {
        label: "11.2",
        paragraphs: [
          "The Company shall provide confirmation of successful investment transactions through the App or any other approved communication channel.",
        ],
      },
      {
        label: "11.3",
        paragraphs: [
          "Withdrawals or redemptions shall be subject to the applicable Investment Plan terms and settlement timelines.",
        ],
      },
      {
        label: "11.4",
        paragraphs: [
          "Early withdrawal may result in fees, reduced returns, loss of accrued benefits or other consequences disclosed in the relevant product terms.",
        ],
      },
      {
        label: "11.5",
        paragraphs: [
          "The Company may delay or restrict withdrawals where required by Applicable Law, court order, regulatory directive, fraud prevention procedures or other lawful requirements.",
        ],
      },
    ],
  },
  {
    id: "fees",
    number: "12",
    title: "FEES, CHARGES AND TAXES",
    clauses: [
      {
        label: "12.1",
        paragraphs: [
          "Applicable fees, charges, interest, commissions and other costs shall be disclosed to you before or at the point at which the relevant Service is provided, as required by Applicable Law.",
        ],
      },
      {
        label: "12.2",
        paragraphs: [
          "You authorise the Company to deduct applicable fees and charges from your Account or any amount otherwise payable to you, where permitted.",
        ],
      },
      {
        label: "12.3",
        paragraphs: [
          "You are responsible for any applicable taxes arising from your use of the Services, except where the Company is required by law to withhold or remit such taxes on your behalf.",
        ],
      },
    ],
  },
  {
    id: "risk-disclosure",
    number: "13",
    title: "RISK DISCLOSURE STATEMENT",
    clauses: [
      {
        label: "13.1",
        paragraphs: [
          "This Risk Disclosure Statement does not disclose all the risks and other significant aspects of investing in the financial/capital markets. Different investment types come with varying degree of risks, which may include the risk of losing money.",
        ],
      },
      {
        label: "13.2",
        paragraphs: [
          "While some investments are typically riskier than others, all investments come with the risk of an investor losing 100% of his investment. Consequently, nothing contained in the APP shall operate as an indication or guarantee of the performance of your Investment Plan. The Company will not, under any circumstances, be liable to you or anyone for any loss on your account or any failure to meet your investment objective stated herein, unless such failure is as a result of proven negligence on our part.",
        ],
      },
      {
        label: "13.3",
        paragraphs: [
          "It is advised that you familiarize yourself with the risks involved in the particular instruments you intend to invest in.",
        ],
      },
      {
        label: "13.4",
        paragraphs: [
          "Transaction charges and any applicable investment management fee on your account will affect your net profit (if any) or increase your loss. Accordingly, you are advised to obtain a clear explanation of all commissions, fees and other charges for which you will be liable.",
        ],
      },
      {
        label: "13.5",
        paragraphs: [
          "For some of our services, e.g., Fixed Income/Money Market Investments, you agree that in executing this mandate, we may act through a third party of our choice and utilise other third-party custodial services.",
        ],
      },
    ],
  },
  {
    id: "transaction-limits",
    number: "14",
    title: "TRANSACTION LIMITS AND FAILED TRANSACTIONS",
    clauses: [
      {
        label: "14.1",
        paragraphs: [
          "The Company may impose limits on transactions and activities including but not limited to, withdrawal, investment, transfer or Loan limits for regulatory, operational, security, risk-management or other legitimate purposes.",
        ],
      },
      {
        label: "14.2",
        paragraphs: [
          "Transactions may be delayed, rejected or reversed where necessary to prevent fraud, comply with Applicable Law, correct an error or comply with a regulatory or law-enforcement requirement.",
        ],
      },
      {
        label: "14.3",
        paragraphs: [
          "Where a transaction fails due to a technical or processing error attributable to the Company, the Company shall take reasonable steps to resolve the issue and, where appropriate, reverse or refund the affected transaction.",
        ],
      },
    ],
  },
  {
    id: "aml-cft",
    number: "15",
    title: "AML/CFT AND SANCTIONS COMPLIANCE",
    clauses: [
      {
        label: "15.1",
        paragraphs: [
          "You agree to comply with all Applicable Laws relating to anti-money laundering, counter-terrorist financing, counter-proliferation financing and sanctions.",
        ],
      },
      {
        label: "15.2",
        paragraphs: [
          "The Company will monitor transactions and account activity and may request additional information concerning the source or purpose of funds either as part of internal policy procedures or in line with regulatory requirement or both.",
        ],
      },
      {
        label: "15.3",
        paragraphs: [
          "The Company may suspend, restrict or refuse a transaction or Account where it reasonably considers this necessary to comply with Applicable Law, regulatory requirements, sanctions obligations or its AML/CFT policies.",
        ],
      },
      {
        label: "15.4",
        paragraphs: [
          "The Company may make reports to regulatory, law-enforcement or financial-intelligence authorities where required or permitted by Applicable Law.",
        ],
      },
      {
        label: "15.5",
        paragraphs: [
          "The Company may be prohibited by law from disclosing certain information relating to suspicious transaction reports or investigations.",
        ],
      },
    ],
  },
  {
    id: "fraud",
    number: "16",
    title: "FRAUD AND PROHIBITED ACTIVITIES",
    clauses: [
      {
        label: "16.1",
        paragraphs: ["You must not:"],
        letters: [
          "use the App for any unlawful purpose;",
          "provide false, fraudulent or misleading information;",
          "impersonate another person;",
          "attempt to access another Customer's Account;",
          "reverse-engineer, interfere with or compromise the App;",
          "introduce malware, viruses or other harmful code;",
          "use the App to facilitate fraud, money laundering or other financial crime;",
          "use another person's payment instrument without lawful authority; or",
          "undertake any activity that may expose the Company or another Customer to regulatory, financial or security risks.",
        ],
      },
    ],
  },
  {
    id: "third-party-services",
    number: "17",
    title: "THIRD-PARTY SERVICES",
    clauses: [
      {
        label: "17.1",
        paragraphs: [
          "The App may integrate with third-party service providers, including banks, payment processors, identity-verification providers, credit bureaux, technology providers and other financial institutions.",
        ],
      },
      {
        label: "17.2",
        paragraphs: [
          "The availability of a third-party service may be subject to the third party's terms and conditions.",
        ],
      },
      {
        label: "17.3",
        paragraphs: [
          "The Company shall not be responsible for the independent acts or omissions of third-party providers except to the extent required by Applicable Law.",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    number: "18",
    title: "INTELLECTUAL PROPERTY",
    clauses: [
      {
        label: "18.1",
        paragraphs: [
          "All intellectual property rights in the App, including its software, design, content, trademarks, logos, databases and functionality, belong to or are lawfully licensed to the Company.",
        ],
      },
      {
        label: "18.2",
        paragraphs: [
          "You are granted a limited, non-exclusive, non-transferable and revocable right to use the App for its intended purpose only.",
        ],
      },
      {
        label: "18.3",
        paragraphs: [
          "You must not reproduce, modify, distribute, sell, lease, reverse-engineer or commercially exploit any part of the App without the Company's prior written consent.",
        ],
      },
    ],
  },
  {
    id: "app-availability",
    number: "19",
    title: "APP AVAILABILITY",
    clauses: [
      {
        label: "19.1",
        paragraphs: [
          "The Company shall take reasonable measures to maintain the availability and security of the App at all times.",
        ],
      },
      {
        label: "19.2",
        paragraphs: [
          "The App may occasionally be unavailable due to maintenance, upgrades, telecommunications failures, cybersecurity incidents, third-party failures or circumstances beyond the Company's reasonable control.",
        ],
      },
      {
        label: "19.3",
        paragraphs: [
          "The Company does not guarantee that the App will always be available, uninterrupted, error-free or free from vulnerabilities. The company will however ensure to take reasonable steps to restore services promptly at all times.",
        ],
      },
    ],
  },
  {
    id: "customer-responsibilities",
    number: "20",
    title: "CUSTOMER RESPONSIBILITIES",
    clauses: [
      {
        label: "20.1",
        paragraphs: ["You are responsible for:"],
        letters: [
          "ensuring that information provided to the Company is accurate;",
          "keeping your Account credentials secure;",
          "reviewing transaction confirmations and Account statements;",
          "promptly reporting unauthorised transactions;",
          "complying with applicable Loan and Investment Plan terms;",
          "maintaining sufficient funds for authorised payments and repayments;",
          "using the App only for lawful purposes; and",
          "promptly notifying the Company of any suspected fraud, error or security compromise.",
        ],
      },
    ],
  },
  {
    id: "complaints",
    number: "21",
    title: "COMPLAINTS AND CUSTOMER REDRESS",
    clauses: [
      {
        label: "21.1",
        paragraphs: [
          "The Company shall maintain channels through which Customers may submit complaints, enquiries and requests for redress.",
        ],
      },
      {
        label: "21.2",
        paragraphs: [
          "Complaints may be submitted through:\nEmail: akiba@griffin-finance.com / info@akibatribe.com\nTelephone: 02018891816\nAddress: Plot 266B Kofo Abayomi street, Victoria Island, Lagos.",
        ],
      },
      {
        label: "21.3",
        paragraphs: [
          "The Company shall handle complaints in accordance with Applicable Law and its approved complaints-handling procedures.",
        ],
      },
      {
        label: "21.4",
        paragraphs: ["Nothing in these Terms prevents you from exercising any right available to you under Applicable Law."],
      },
    ],
  },
  {
    id: "data-subject-rights",
    number: "22",
    title: "DATA SUBJECT RIGHTS",
    clauses: [
      {
        label: "22.1",
        paragraphs: ["Subject to Applicable Law, you may have rights in relation to your Personal Data, including rights to:"],
        letters: [
          "request access to your Personal Data;",
          "request correction of inaccurate or incomplete Personal Data;",
          "request deletion or erasure where legally applicable;",
          "object to or request restriction of certain processing;",
          "request portability of Personal Data where applicable;",
          "withdraw consent where processing is based on consent; and",
          "exercise other rights available under the NDPA.",
        ],
      },
      {
        label: "22.2",
        paragraphs: ["Requests may be made through gflcompliance@griffin-finance.com."],
      },
      {
        label: "22.3",
        paragraphs: [
          "The Company may take reasonable steps to verify your identity before processing a data-subject request.",
        ],
      },
    ],
  },
  {
    id: "privacy-policy",
    number: "23",
    title: "PRIVACY POLICY",
    clauses: [
      {
        label: "23.1",
        paragraphs: [
          "Our Privacy Policy forms part of these Terms and explains in greater detail how we collect, use, disclose, retain and protect Personal Data.",
        ],
      },
      {
        label: "23.2",
        paragraphs: ["You should read the Privacy Policy before using the App."],
      },
      {
        label: "23.3",
        paragraphs: [
          "Where there is a conflict between these Terms and the Privacy Policy concerning the processing of Personal Data, the Privacy Policy shall apply to the extent necessary to comply with Applicable Law.",
        ],
      },
    ],
  },
  {
    id: "suspension",
    number: "24",
    title: "SUSPENSION AND TERMINATION",
    clauses: [
      {
        label: "24.1",
        paragraphs: ["You may close your Account by following the applicable Account closure process."],
      },
      {
        label: "24.2",
        paragraphs: [
          "The Company may suspend or terminate your access to the App where you breach the Terms, including but not limited to the following:",
        ],
        letters: [
          "you engage in fraud or suspected unlawful activity;",
          "continued access creates a regulatory, legal, security or financial risk;",
          "required by a regulator, court or other competent authority;",
          "you provide materially false information;",
          "you fail to provide information requested or required by the Company within 48 hours; or",
          "the Company is otherwise legally entitled to do so.",
        ],
      },
      {
        label: "24.3",
        paragraphs: [
          "You agree that the Company shall bear no liability for suspending or terminating your access to the App in accordance with this Terms of Use.",
        ],
      },
      {
        label: "24.4",
        paragraphs: ["Termination of your Account shall not extinguish any obligation accrued before termination."],
      },
      {
        label: "24.5",
        paragraphs: [
          "Any outstanding Loan shall remain payable notwithstanding closure or termination of your Account.",
        ],
      },
      {
        label: "24.6",
        paragraphs: [
          "Where you have an active Investment Plan, closure of the Account shall be subject to the applicable Investment Plan terms.",
        ],
      },
    ],
  },
  {
    id: "changes",
    number: "25",
    title: "CHANGES TO THESE TERMS",
    clauses: [
      {
        label: "25.1",
        paragraphs: [
          "The Company may amend these Terms from time to time to reflect changes in Applicable Law, regulatory requirements, technology, products or business practices.",
        ],
      },
      {
        label: "25.2",
        paragraphs: [
          "Where an amendment materially affects your rights or obligations, the Company shall provide notice through an appropriate channel and, where required, obtain your acceptance before the amendment becomes applicable.",
        ],
      },
      {
        label: "25.3",
        paragraphs: [
          "Continued use of the App following the effective date of an amendment shall constitute acceptance of the amended Terms where legally permissible.",
        ],
      },
    ],
  },
  {
    id: "force-majeure",
    number: "26",
    title: "FORCE MAJEURE",
    clauses: [
      {
        label: "26.1",
        paragraphs: [
          "The Company shall not be liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond its reasonable control, including natural disasters, war, civil unrest, government action, regulatory intervention, telecommunications failure, widespread cybersecurity incidents, system failures or other events of force majeure.",
        ],
      },
    ],
  },
  {
    id: "liability",
    number: "27",
    title: "LIMITATION OF LIABILITY",
    clauses: [
      {
        label: "27.1",
        paragraphs: ["To the maximum extent permitted by Applicable Law, the Company shall not be liable for losses arising from:"],
        letters: [
          "your failure to maintain the security of your credentials;",
          "your provision of inaccurate information;",
          "unauthorised use of your device or credentials where attributable to your negligence or failure to follow security requirements;",
          "third-party service failures;",
          "telecommunications or internet failures;",
          "circumstances beyond the Company's control; or",
          "your breach of these Terms.",
        ],
      },
      {
        label: "27.2",
        paragraphs: [
          "Nothing in these Terms shall exclude or limit liability for fraud, wilful misconduct, death or personal injury caused by negligence, or any liability which cannot lawfully be excluded or limited.",
        ],
      },
    ],
  },
  {
    id: "indemnity",
    number: "28",
    title: "INDEMNITY",
    clauses: [
      {
        label: "28.1",
        paragraphs: [
          "To the extent permitted by Applicable Law, you agree to indemnify the Company against all third-party claims, all losses, liabilities, costs and expenses incurred as a result of your use of the App, your violation of these Terms, any act, error or omission arising out of the use of your account on the App, your fraud, unlawful conduct, or misuse of the App.",
        ],
      },
      {
        label: "28.2",
        paragraphs: [
          "In the event that there are claims against you for which you are entitled to be indemnified by us, or we are subject to any claims, we reserve the right, at our expense in the case of claims by third parties against you, and at your expense, in the case of claims for which we have the right to be indemnified by you, to undertake the exclusive defense and control of any such claim, and you agree that in any event no such claim can be settled without our prior written consent.",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    number: "29",
    title: "GOVERNING LAW AND DISPUTE RESOLUTION",
    clauses: [
      {
        label: "29.1",
        paragraphs: [
          "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
        ],
      },
      {
        label: "29.2",
        paragraphs: [
          "Subject to applicable regulatory and dispute-resolution procedures, all disputes arising from or relating to these Terms which cannot be resolved amicably within 30 days of the dispute arising shall be referred to Arbitration in accordance with the Arbitration and Mediation Act 2023.",
        ],
      },
      {
        label: "29.3",
        paragraphs: [
          "The arbitration shall be conducted by a sole arbitrator to be mutually agreed upon by the Parties and failing such agreement, by the Chairman, Chartered Institute of Arbitrators, (UK), Nigeria Branch. The place of the arbitration shall be Lagos, Nigeria and the language of the arbitration shall be English. The decision of the arbitrator shall be final and binding on the Parties.",
        ],
      },
    ],
  },
  {
    id: "severability",
    number: "30",
    title: "SEVERABILITY",
    clauses: [
      {
        label: "30.1",
        paragraphs: [
          "If any provision of these Terms is determined to be invalid, unlawful or unenforceable, that provision shall, to the extent possible, be modified to give effect to its intended purpose, and the remaining provisions shall continue in full force and effect.",
        ],
      },
    ],
  },
  {
    id: "entire-agreement",
    number: "31",
    title: "ENTIRE AGREEMENT",
    clauses: [
      {
        label: "31.1",
        paragraphs: [
          "These Terms, together with the Privacy Policy and any applicable product-specific terms, constitute the agreement between you and the Company concerning your use of the App and supersede previous terms relating to the same subject matter.",
        ],
      },
    ],
  },
  {
    id: "contact",
    number: "32",
    title: "CONTACT INFORMATION",
    clauses: [
      {
        label: "32.1",
        paragraphs: [
          "For enquiries, complaints, data-protection requests or other matters relating to the App:\nGRIFFIN FINANCE LIMITED\nAddress: Plot 266B Kofo Abayomi street, Victoria Island, Lagos\nEmail: info@griffin-finance.com\nTelephone: 02018891816\nData Protection Contact: gflcompliance@griffin-finance.com",
        ],
      },
    ],
  },
]

export const acknowledgement = {
  title: "CUSTOMER ACKNOWLEDGEMENT",
  intro:
    "By clicking “I Agree”, “Accept” and registering for an Account or continuing to use the App, you confirm that:",
  items: [
    "You have read and understood these Terms;",
    "You agree to be legally bound by these Terms;",
    "You have read the Company's Privacy Policy;",
    "You consent to the processing of your Personal Data where consent is the lawful basis for such processing;",
    "You authorise the Company to carry out KYC, AML/CFT, fraud prevention and credit checks as permitted by Applicable Law;",
    "You authorise the Company to obtain and disclose credit information to authorised credit reference agencies and other permitted persons;",
    "You confirm that all information provided for the purpose of opening your Account is complete, true and accurate and that all required documents provided are true and authentic.",
    "You confirm that in the event there is a change to the information and documents provided, you will notify us and provide updated information within two (2) weeks of such change.",
    "You confirm that all funds received to your Account are legitimate and not directly or indirectly the proceeds of any unlawful activity and fully indemnify GFL and any other parties that have participated in the processes required to conclude opening of the Account.",
    "You agree to indemnify GFL, on demand, for any loss that may be sustained as a result of inaccurate or misleading information you provide in relation to your Account or failure to comply with the terms and conditions of the App and other required compliance actions.",
    "You agree to receive electronic communications relating to your Account and Services; and",
    "Where separately presented and accepted, you consent to receive direct marketing communications from the Company.",
  ],
}

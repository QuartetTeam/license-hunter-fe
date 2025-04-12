interface ISearchCertData {
    id: number,
    mainCategory: string,
    subCategory: string,
    name: string,
    applicationDate: string,
    examDate: string,
    calendarSubscription: number
}

export interface ISearchCertStore {
    searchCertData: ISearchCertData[],
    setSearchCertData: (data: ISearchCertData[]) => void;
}
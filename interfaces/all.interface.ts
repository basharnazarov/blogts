export interface IMain {
    children: React.ReactNode
}

export interface Irows {
    id: number,
    title: string,
    time: string,
    statusPublished: boolean
}

export interface postsState {
    posts: Irows[],
    publishedTotal:number,
    draftsTotal: number,
    filter: {
        published: boolean,
        draft: boolean
    }
  }

  export interface pageState {
    postPage: boolean
  }

export interface Idata {
    id: number | string,
    title: string, 
    time: Date | string,
    status:string
}
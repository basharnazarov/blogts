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
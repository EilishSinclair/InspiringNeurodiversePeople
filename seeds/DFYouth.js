exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('DFYouth').del()
    .then(function () {
      // Inserts seed entries
      return knex('DFYouth').insert([
        { id: 1, name: 'John M', link: 'https://twitter.com/JHMarble?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', img: 'https://pbs.twimg.com/profile_images/1049324427857387520/b_QDexdU_400x400.jpg' },
        { id: 2, name: 'Lauren D', link: 'https://twitter.com/laurenduffy97?lang=en', img: 'https://pbs.twimg.com/profile_images/1106300836383199233/1Hhy1qcc_400x400.jpg' },
        { id: 3, name: 'Hannah H', link: 'https://www.nzherald.co.nz/nz/news/article.cfm?c_id=1&objectid=12210161', img: 'https://www.nzherald.co.nz/resizer/h_DUWXJyEOSqdhkwGoYHSTUzG5A=/620x349/smart/filters:quality(70)/arc-anglerfish-syd-prod-nzme.s3.amazonaws.com/public/QVEMG46QQNHZDBVWTC4WTXGFLA.jpg' },
        { id: 4, name: 'Eilish S', link: 'https://www.youtube.com/channel/UCCkvIt07pTNXGWFVCn7nRkA', img: 'https://media.licdn.com/dms/image/C5603AQFZ9e_bulHw9g/profile-displayphoto-shrink_200_200/0?e=1573689600&v=beta&t=OhaAHpKMZf3Zhfupg80z9F0IRS463CFxJd-F2xNVoxE' }
      ])
    })
}

// controllers/home.c.js
// const Song = require('../models/song.m');
// const sequelize = require('../config/db');

class HomeController {
  // constructor() {
  //   // Đảm bảo rằng sequelize.sync() chỉ được gọi một lần duy nhất khi ứng dụng bắt đầu chạy
  //   sequelize
  //     .sync()
  //     .then(() => {
  //       console.log('Database synchronized successfully.');
  //     })
  //     .catch((error) => {
  //       console.error('Error syncing database:', error);
  //     });
  // }

  getHomePage = async (req, res) => {
    // Lấy danh sách bài hát
    // const listSong = await Song.findAll(); // Lấy tất cả các bài hát từ cơ sở dữ liệu
    // const songs = listSong.map((song) => ({
    //   id: song.dataValues.id,
    //   title: song.dataValues.title,
    //   artist: song.dataValues.artist,
    //   url: song.dataValues.url,
    // }));
    // console.log(songs);
    // if (songs.length !== 0) {
    //   console.log('có songs');
    //   return res.render('home', { songs });
    // } else {
    //   const message = 'Không có bài hát để hiển thị';
    //   console.log(message);
    //   return res.render('home', message);
    // }
    return res.render('home');
  };

  // createNewSong = async (req, res, next) => {
  //   try {
  //     // Tạo một bản ghi mới trong bảng "songs"
  //     const song = await Song.create({ title: 'cupid3', artist: 'j2ack', url: '123asdsd' });
  //     console.log('Created Song:', song.toJSON());
  //     res.status(200).json({ message: 'Created Song successfully', song: song.toJSON() });
  //   } catch (error) {
  //     next(error);
  //     console.error('Error creating Song:', error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // };
}

module.exports = new HomeController();

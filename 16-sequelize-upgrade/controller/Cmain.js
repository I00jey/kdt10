const e = require("express");
const { Player, Profile, Team } = require("../models/index");
const { Op } = require("sequelize");

exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.send(players);
    } catch (err) {
        console.error(err);
        res.send("Internal Srver Error!");
    }
};

exports.getPlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const player = await Player.findOne({
            where: { player_id }
        });
        res.send(player);
    } catch (error) {
        console.log(error);
        res.send("Internal Srver Error!");
    }
};

exports.postPlayer = async (req, res) => {
    try {
        const { name, age, team_id } = req.body;
        const newplayer = await Player.create({
            name,
            age,
            team_id
        });
        res.send(newplayer);
    } catch (error) {
        console.log(error);
        res.send("Internal Srver Error!");
    }
};

exports.patchPlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const { team_id } = req.body;
        const updatePlayer = await Player.update(
            {
                team_id
            },
            { where: { player_id } }
        );
        res.send(updatePlayer);
    } catch (error) {
        console.log(error);
        res.send("Internal Srver Error!");
    }
};

exports.deletePlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const deletePlayer = await Player.destroy({
            where: { player_id }
        });
        // 성공하면 1 실패하면 0
        if (deletePlayer) {
            res.send({ isDeleted: true });
        } else {
            res.send({ isDeleted: false });
        }
    } catch (error) {
        console.log(error);
        res.send("Internal Srver Error!");
    }
};

exports.getTeams = async (req, res) => {
    try {
        // 쿼리 스트링으로 조회 기준 설정
        const { sort, search } = req.query;
        let teams;
        // sort 키가 있는 경우 name 기준 오름차순 정렬
        if (sort === "name_asc") {
            teams = await Team.findAll({
                attributes: ["team_id", "name"],
                order: [["name", "asc"]]
            });
        } else if (search) {
            // search 키에 대한 값이 있다면
            teams = await Team.findAll({
                attributes: ["team_id", "name"],
                where: {
                    name: { [Op.like]: `%${search}%` }
                }
            });
        } else {
            teams = await Team.findAll({
                attributes: ["team_id", "name"]
            });
        }
        res.send(teams);
    } catch (error) {
        console.log(error);
        res.send("Internal Srver Error!");
    }
};

exports.getTeam = async (req, res) => {
    try {
        const { team_id } = req.params;
        const team = await Team.findOne({
            attributes: ["team_id", "name"],
            where: { team_id }
        });
        res.send(team);
    } catch (error) {
        console.log(error);
        res.send("Internal Srver Error!");
    }
};

exports.getTeamPlayers = async (req, res) => {
    try {
        const { team_id } = req.params;
        const team = await Team.findOne({
            where: { team_id },
            include: [{ model: Player }] // 조인과 같은 역할
        });
        res.send(team);
    } catch (error) {
        console.log(error);
        res.send("Internal Srver Error!");
    }
};

// Посчитать все голы Месси втрех соревнованиях
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // Создаем переменную равную трем значениям функции.
    let res = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    // Вызываем результат через
    return(res);
}

// Короче, без задания новой переменной, сразу через return
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;;
}
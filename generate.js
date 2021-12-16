$(document).ready(function() {

    $("all").click(function(){
        document.getElementById("list-container").innerHTML = '<div class="item">
        <div class="image">
            <img src="img/BluePeriod.jpg" width="200px" alt="Blue Period" />
        </div>
        <div class="title watching">Blue Period</div>
        <div class="subtitle watching">ブルーピリオド</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Seven Arcs</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 1/12</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> —</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/DejiMeetsGirl.jpg" width="200px" alt="Deji Meets Girl" />
        </div>
        <div class="title watching">Deji Meets Girl</div>
        <div class="subtitle watching">でーじミーツガール</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> LIDENFILMS</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 2/12</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> —</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/KekkaiSense.jpg" width="200px" alt="Kekkai Sensen" />
        </div>
        <div class="title watching">Kekkai Sensen</div>
        <div class="subtitle watching">血界戦線</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Bones</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 4/12</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> —</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/KomiSanWaComyoshou.png" width="200px" alt="Komi-san wa, Comyushou desu." />
        </div>
        <div class="title watching">Komi-san wa, Comyushou desu.</div>
        <div class="subtitle watching">古見さんは、コミュ症です。</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> OLM</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 2/—</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> —</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/PlatinumEnd.png" width="200px" alt="Platinum End" />
        </div>
        <div class="title watching">Platinum End</div>
        <div class="subtitle watching">プラチナエンド</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Signal.MD</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 2/24</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> —</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/SamuraiChamploo.png" width="200px" alt="Samurai Champloo" />
        </div>
        <div class="title watching">Samurai Champloo</div>
        <div class="subtitle watching">サムライチャンプルー</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Manglobe</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 24/26</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> —</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/SonnyBoy.png" width="200px" alt="Sonny Boy" />
        </div>
        <div class="title watching">Sonny Boy</div>
        <div class="subtitle watching">Sonny Boy</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Madhouse</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 3/12</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> —</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/TaktOpDestiny.jpg" width="200px" alt="Takt Op. Destiny" />
        </div>
        <div class="title watching">Takt Op. Destiny</div>
        <div class="subtitle watching">Takt Op. Destiny</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Madhouse, MAPPA</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 1/—</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> —</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/TokyoRevengers.jpg" width="200px" alt="Tokyo Revengers" />
        </div>
        <div class="title watching">Tokyo Revengers</div>
        <div class="subtitle watching">東京リベンジャーズ</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> LIDENFILMS</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 1/24</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> —</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/3GatsuNoLion.jpg" width="200px" alt="3-gatsu no lion" />
        </div>
        <div class="title completed">3-gatsu no lion</div>
        <div class="subtitle completed">3月のライオン</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Shaft</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 22/22</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> 10/10</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/3GatsuNoLion2ndSeason.jpg" width="200px" alt="3-gatsu no lion 2nd Season" />
        </div>
        <div class="title completed">3-gatsu no lion 2nd Season</div>
        <div class="subtitle completed"> 3月のライオン 第2シリーズ</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Shaft</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 22/22</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> 10/10</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/86.png" width="200px" alt="86" />
        </div>
        <div class="title completed">86</div>
        <div class="subtitle completed"> 86―エイティシックス―</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> A-1 Pictures</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 11/11</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> 9/10</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/91Days.jpg" width="200px" alt="91 Days" />
        </div>
        <div class="title completed">91 Days</div>
        <div class="subtitle completed">91Days</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Shuka</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> TV</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 12/12</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> 7/10</div>
    </div>
    <div class="item">
        <div class="image">
            <img src="img/Aggretsuko.jpg" width="200px" alt="91 Days" />
        </div>
        <div class="title completed">Aggressive Retsuko</div>
        <div class="subtitle completed">アグレッシブ烈子</div>
        <div class="studio"><i class="fas fa-file-contract" title="Studio"></i> Fanworks</div>
        <div class="type"><i class="fas fa-desktop" title="Type"></i> ONA</div>
        <div class="ep-number"><i class="fas fa-tasks" title="Progress"></i> 10/10</div>
        <div class="score"><i class="fas fa-star" title="Score"></i> 8/10</div>
    </div>';
    })
})
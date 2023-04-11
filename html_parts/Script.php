<script type="module">
    <?php
        require "bin/functions.php";
    ?>
    import {attachTimeDiv} from "./bin/Clock_data.js";
    setInterval(attachTimeDiv,1000);
</script>
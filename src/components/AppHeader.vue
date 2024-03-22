<script>
export default {
    name: 'AppHeader'
}

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="min-height: 50px;">
            <div class="container-fluid position-relative">
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Uomo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Donna</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Bambino</a>
                        </li>

                    </ul>
                </div>

                <img class="position-absolute start-50" src="/img/boolean-logo.png" alt="Boolando" width="130" height="30">
                
                <div class="collapse navbar-collapse position-absolute bottom-0 end-0" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <i class="fa-regular fa-user"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <i class="fa-regular fa-heart"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </a>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
    </header>
</template>

<style lang="scss"></style>

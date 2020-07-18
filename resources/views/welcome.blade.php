<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Fizz Buzz</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="/css/app.css" />
    </head>
    <body>
        <div id="app"></div>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">Fizz Buzz</div>
                <div>
                    @foreach($results as $key => $result)
                        <span
                            alt="{{ $key }}"
                            title="{{ $key }}"
                            class="
                                result
                                @if($result === 'Fizz') fizz @endif
                                @if($result === 'Buzz') buzz @endif
                                @if($result === 'FizzBuzz') fizz-buzz @endif"
                        >
                            {{ $result }}
                            @if($result !== $key)
                                <sup><small>{{ $key }}</small></sup>
                            @endif
                        </span>
                     @endforeach
                </div>
            </div>
        </div>
        <script type="text/javascript" src="/js/app.js"></script>
    </body>
</html>

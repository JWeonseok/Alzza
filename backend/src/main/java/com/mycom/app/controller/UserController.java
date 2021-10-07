package com.mycom.app.controller;

import com.mycom.app.domain.dto.user.UserDto;
import com.mycom.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Autowired
    UserService userService;

    @GetMapping()
    public ResponseEntity<UserDto> userDetail(@RequestParam String userId){
        UserDto userDto = userService.userDetail(userId);
        if(userDto == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity updateUserInfo(@RequestBody UserDto userDto){
        try{
            int result = userService.updateUserInfo(userDto);
            if(result == SUCCESS) return new ResponseEntity(true, HttpStatus.OK);
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/password")
    public ResponseEntity updateUserPassword(@RequestBody UserDto userDto){
        try{
            int result = userService.updateUserPassword(userDto);
            if(result == SUCCESS) return new ResponseEntity(true, HttpStatus.OK);
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity deleteUser(@PathVariable String userId){
        try{
            int result = userService.deleteUser(userId);
            if(result == SUCCESS) return new ResponseEntity(true, HttpStatus.OK);
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
